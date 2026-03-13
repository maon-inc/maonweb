import { useEffect, useRef, useState, type CSSProperties } from 'react';

import instagramIcon from '../assets/instagram-icon.svg';
import redditIcon from '../assets/reddit-icon.svg';
import tiktokIcon from '../assets/tiktok-icon.svg';
import type {
  ShowcaseBlockedApp,
  ShowcaseContent,
  ShowcaseHistoryItem,
  ShowcaseMessage,
} from '../content/homePageContent';
import { MaonMark } from './MaonMark';
import styles from './ShowcaseSection.module.css';

type ShowcaseSectionProps = {
  content: ShowcaseContent;
};

const MESSAGE_TYPING_DELAY_MS = 700;
const MESSAGE_PAUSE_DELAY_MS = 260;
const SHOWCASE_STAGE_WIDTH = 906;
const SHOWCASE_STAGE_HEIGHT = 608;
const SHOWCASE_STAGE_FALLBACK_GUTTER = 32;
const BLOCKED_APP_ICONS: Record<ShowcaseBlockedApp, { src: string; alt: string }> = {
  instagram: { src: instagramIcon, alt: 'Instagram' },
  tiktok: { src: tiktokIcon, alt: 'TikTok' },
  reddit: { src: redditIcon, alt: 'Reddit' },
};

function renderMessageText(message: ShowcaseMessage) {
  if (!message.italicWord || !message.text.includes(message.italicWord)) {
    return message.text;
  }

  const [before, after] = message.text.split(message.italicWord, 2);

  return (
    <>
      {before}
      <em>{message.italicWord}</em>
      {after}
    </>
  );
}

function getBubbleVariantClass(variant: ShowcaseMessage['variant']) {
  switch (variant) {
    case 'incoming-short':
      return styles.bubbleIncomingShort;
    case 'incoming-tall':
      return styles.bubbleIncomingTall;
    case 'incoming-question':
      return styles.bubbleIncomingQuestion;
    case 'outgoing-short':
      return styles.bubbleOutgoingShort;
    case 'outgoing-medium':
      return styles.bubbleOutgoingMedium;
    case 'outgoing-large':
      return styles.bubbleOutgoingLarge;
  }
}

function renderHistoryCard(item: ShowcaseHistoryItem) {
  const isFeatured = item.variant === 'featured';

  return (
    <article
      className={isFeatured ? `${styles.historyItem} ${styles.historyItemFeatured}` : styles.historyItem}
      key={item.title}
    >
      <span
        aria-hidden="true"
        className={styles.historyRail}
        style={{ backgroundColor: item.railColor }}
      />
      <div className={styles.historyBody}>
        <div className={styles.historyTopline}>
          <div className={styles.historyTextBlock}>
            <p className={styles.historyTitle}>{item.title}</p>
            <p className={styles.historyDetail}>{item.detail}</p>
          </div>
          <p className={styles.historyTimestamp}>{item.timestamp}</p>
        </div>

        {isFeatured ? (
          <>
            <div className={styles.historyDivider} aria-hidden="true" />
            <div className={styles.historyFeatureRow}>
              <div className={styles.featureBlock}>
                <p className={styles.featureCaption}>ends in:</p>
                <p className={styles.featureValue}>{item.endsIn}</p>
              </div>
              <div className={styles.featureBlock}>
                <p className={styles.featureCaption}>apps blocked:</p>
                <div className={styles.appIcons}>
                  {item.blockedApps?.map((app) => {
                    const icon = BLOCKED_APP_ICONS[app];

                    return (
                      <span className={styles.appIcon} key={app}>
                        <img alt={icon.alt} className={styles.appIconImage} src={icon.src} />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </article>
  );
}

export function ShowcaseSection({ content }: ShowcaseSectionProps) {
  const phoneRef = useRef<HTMLElement | null>(null);
  const stageViewportRef = useRef<HTMLDivElement | null>(null);
  const [isPhoneInView, setIsPhoneInView] = useState(false);
  const [visibleMessageCount, setVisibleMessageCount] = useState(0);
  const [messagePhase, setMessagePhase] = useState<'idle' | 'typing' | 'pause' | 'done'>('idle');
  const [stageScale, setStageScale] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const updateStageScale = () => {
      const measuredWidth = stageViewportRef.current?.getBoundingClientRect().width ?? 0;
      const fallbackWidth = Math.max(window.innerWidth - SHOWCASE_STAGE_FALLBACK_GUTTER, 0);
      const availableWidth = measuredWidth > 0 ? measuredWidth : fallbackWidth;
      const nextScale = Math.min(1, availableWidth / SHOWCASE_STAGE_WIDTH);

      setStageScale((currentScale) => (currentScale === nextScale ? currentScale : nextScale));
    };

    updateStageScale();

    window.addEventListener('resize', updateStageScale);

    return () => {
      window.removeEventListener('resize', updateStageScale);
    };
  }, []);

  useEffect(() => {
    const phoneElement = phoneRef.current;

    if (!phoneElement || typeof IntersectionObserver === 'undefined') {
      setIsPhoneInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsPhoneInView(entry?.isIntersecting ?? false);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(phoneElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isPhoneInView) {
      setVisibleMessageCount(0);
      setMessagePhase('idle');
      return;
    }

    setMessagePhase((currentPhase) => (currentPhase === 'idle' ? 'typing' : currentPhase));
  }, [isPhoneInView]);

  useEffect(() => {
    if (!isPhoneInView) {
      return undefined;
    }

    if (visibleMessageCount >= content.messages.length) {
      setMessagePhase('done');
      return undefined;
    }

    if (messagePhase === 'typing') {
      const revealTimer = window.setTimeout(() => {
        setVisibleMessageCount((count) => count + 1);
        setMessagePhase('pause');
      }, MESSAGE_TYPING_DELAY_MS);

      return () => {
        window.clearTimeout(revealTimer);
      };
    }

    if (messagePhase === 'pause') {
      const nextMessageTimer = window.setTimeout(() => {
        setMessagePhase('typing');
      }, MESSAGE_PAUSE_DELAY_MS);

      return () => {
        window.clearTimeout(nextMessageTimer);
      };
    }

    return undefined;
  }, [content.messages.length, isPhoneInView, messagePhase, visibleMessageCount]);

  const visibleMessages = content.messages.slice(0, visibleMessageCount);
  const pendingMessage = content.messages[visibleMessageCount];
  const showTypingIndicator = isPhoneInView
    && visibleMessageCount < content.messages.length
    && messagePhase === 'typing';
  const typingIndicatorClassName = pendingMessage?.sender === 'user'
    ? `${styles.typingIndicator} ${styles.typingIndicatorOutgoing}`
    : `${styles.typingIndicator} ${styles.typingIndicatorIncoming}`;
  const typingDotClassName = pendingMessage?.sender === 'user'
    ? `${styles.typingDot} ${styles.typingDotOutgoing}`
    : `${styles.typingDot} ${styles.typingDotIncoming}`;
  const stageStyle = {
    '--showcase-scale': stageScale.toString(),
    '--showcase-stage-width': `${SHOWCASE_STAGE_WIDTH}px`,
    '--showcase-stage-height': `${SHOWCASE_STAGE_HEIGHT}px`,
  } as CSSProperties;

  return (
    <section className={styles.section} aria-label="Product preview">
      <div className="homeContainer">
        <div
          className={styles.stageViewport}
          data-testid="showcase-stage-viewport"
          ref={stageViewportRef}
        >
          <div className={styles.stageSizer} style={stageStyle}>
            <div className={styles.grid} data-testid="showcase-stage">
              <div className={`${styles.column} ${styles.columnMessages}`}>
                <p className={`${styles.label} ${styles.labelMessages}`}>{content.messagesLabel}</p>
                <article className={styles.phone} ref={phoneRef}>
                  <div className={styles.phoneHeader}>
                    <button
                      type="button"
                      className={styles.backButton}
                      aria-label="Go back"
                    >
                      <span aria-hidden="true" className={styles.backGlyph}>
                        ‹
                      </span>
                    </button>
                    <div className={styles.phoneBrandMark}>
                      <MaonMark className={styles.phoneAvatar} />
                      <span className={styles.phoneBrandName}>maon</span>
                    </div>
                  </div>
                  <div className={styles.thread}>
                    {visibleMessages.map((message) => (
                      <div
                        className={
                          message.sender === 'user'
                            ? `${styles.bubble} ${getBubbleVariantClass(message.variant)} ${styles.bubbleReply}`
                            : `${styles.bubble} ${getBubbleVariantClass(message.variant)} ${styles.bubbleIncoming}`
                        }
                        data-variant={message.variant}
                        key={message.id}
                      >
                        {renderMessageText(message)}
                      </div>
                    ))}
                    {showTypingIndicator ? (
                      <div
                        className={typingIndicatorClassName}
                        data-sender={pendingMessage?.sender}
                        aria-hidden="true"
                      >
                        <span className={typingDotClassName} />
                        <span className={typingDotClassName} />
                        <span className={typingDotClassName} />
                      </div>
                    ) : null}
                  </div>
                </article>
              </div>

              <div className={`${styles.column} ${styles.columnWide} ${styles.columnHistory}`}>
                <p className={`${styles.label} ${styles.labelHistory}`}>{content.historyLabel}</p>
                <div className={styles.historyCard}>
                  {content.historyItems.map((item) => renderHistoryCard(item))}
                </div>
              </div>

              <div className={`${styles.column} ${styles.columnStories}`}>
                <p className={`${styles.label} ${styles.labelStories}`}>{content.storiesLabel}</p>
                <div className={styles.metrics}>
                  {content.metrics.map((metric) => (
                    <article
                      className={
                        metric.tone === 'peach'
                          ? `${styles.metricCard} ${styles.metricPeach}`
                          : `${styles.metricCard} ${styles.metricGreen}`
                      }
                      key={metric.label}
                    >
                      <p className={styles.metricLabel}>{metric.label}</p>
                      <p className={styles.metricValue}>{metric.value}</p>
                      <p className={styles.metricDescription}>{metric.description}</p>
                      <div className={styles.metricCircle} aria-hidden="true" />
                      <div className={styles.metricBadge} aria-hidden="true">
                        <span>{metric.badge}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
