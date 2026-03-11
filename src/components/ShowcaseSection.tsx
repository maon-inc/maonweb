import type {
  ShowcaseBlockedApp,
  ShowcaseContent,
  ShowcaseHistoryItem,
  ShowcaseMessage,
} from '../content/homePageContent';
import styles from './ShowcaseSection.module.css';

type ShowcaseSectionProps = {
  content: ShowcaseContent;
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

function getBlockedAppClass(app: ShowcaseBlockedApp) {
  switch (app) {
    case 'instagram':
      return styles.appIconInstagram;
    case 'tiktok':
      return styles.appIconTiktok;
    case 'reddit':
      return styles.appIconReddit;
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
          <div>
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
                <div className={styles.appIcons} aria-hidden="true">
                  {item.blockedApps?.map((app) => (
                    <span className={`${styles.appIcon} ${getBlockedAppClass(app)}`} key={app}>
                      {app === 'instagram' ? (
                        <span className={styles.appIconInstagramInner}>
                          <span className={styles.appIconInstagramLens} />
                          <span className={styles.appIconInstagramFlash} />
                        </span>
                      ) : null}
                      {app === 'tiktok' ? <span className={styles.appIconTiktokGlyph}>d</span> : null}
                      {app === 'reddit' ? (
                        <span className={styles.appIconRedditInner}>
                          <span className={styles.appIconRedditEye} />
                          <span className={styles.appIconRedditEye} />
                          <span className={styles.appIconRedditSmile} />
                          <span className={styles.appIconRedditAntenna} />
                        </span>
                      ) : null}
                    </span>
                  ))}
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
  return (
    <section className={styles.section} aria-label="Product preview">
      <div className="homeContainer">
        <div className={styles.grid}>
          <div className={styles.column}>
            <p className={styles.label}>{content.messagesLabel}</p>
            <article className={styles.phone}>
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
                  <span className={styles.phoneAvatar} aria-hidden="true">
                    <span className={styles.phoneAvatarEye} />
                    <span className={styles.phoneAvatarEye} />
                    <span className={styles.phoneAvatarSmile} />
                  </span>
                  <span className={styles.phoneBrandName}>maon</span>
                </div>
              </div>
              <div className={styles.thread}>
                {content.messages.map((message) => (
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
                <div className={styles.typingIndicator} aria-hidden="true">
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              </div>
            </article>
          </div>

          <div className={`${styles.column} ${styles.columnWide}`}>
            <p className={styles.label}>{content.historyLabel}</p>
            <div className={styles.historyCard}>
              {content.historyItems.map((item) => renderHistoryCard(item))}
            </div>
          </div>

          <div className={styles.column}>
            <p className={styles.label}>{content.storiesLabel}</p>
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
    </section>
  );
}
