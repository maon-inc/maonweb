import type { ShowcaseContent } from '../content/homePageContent';
import styles from './ShowcaseSection.module.css';

type ShowcaseSectionProps = {
  content: ShowcaseContent;
};

const conversation = [
  { speaker: 'maon', tone: 'prompt', text: 'what should i call you?' },
  {
    speaker: 'maon',
    tone: 'prompt',
    text: 'hi user, want to hear about me, or should we start with you?',
  },
  { speaker: 'user', tone: 'reply', text: 'hey im user.' },
  { speaker: 'maon', tone: 'prompt', text: 'when you start slipping do you notice it? or does it hit you later?' },
  { speaker: 'user', tone: 'reply', text: 'ik you step in right away' },
  {
    speaker: 'user',
    tone: 'replyLong',
    text: 'i do not notice it until it gets really bad and then i start spiraling',
  },
] as const;

export function ShowcaseSection({ content }: ShowcaseSectionProps) {
  const featuredHistoryItem = content.historyItems[0];
  const trailingHistoryItems = content.historyItems.slice(1);

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
                  <span aria-hidden="true">‹</span>
                </button>
                <div className={styles.phoneBrandMark}>
                  <span className={styles.phoneRing} aria-hidden="true" />
                  <span>maon</span>
                </div>
              </div>
              <div className={styles.thread}>
                {conversation.map((message) => (
                  <div
                    className={
                      message.tone === 'reply'
                        ? `${styles.bubble} ${styles.bubbleReply}`
                        : message.tone === 'replyLong'
                          ? `${styles.bubble} ${styles.bubbleReply} ${styles.bubbleLong}`
                          : styles.bubble
                    }
                    key={message.text}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className={`${styles.column} ${styles.columnWide}`}>
            <p className={styles.label}>{content.historyLabel}</p>
            <article className={styles.historyCard}>
              <div className={styles.historyTimeline} aria-hidden="true" />
              <div className={styles.historyContent}>
                <div
                  className={`${styles.historyItem} ${styles.historyItemFeatured}`}
                >
                  <div className={styles.historyTopline}>
                    <div>
                      <p className={styles.historyTitle}>{featuredHistoryItem.title}</p>
                      <p className={styles.historyDetail}>{featuredHistoryItem.detail}</p>
                    </div>
                    <p className={styles.historyTimestamp}>
                      {featuredHistoryItem.timestamp}
                    </p>
                  </div>
                  <div className={styles.historyFeatureRow}>
                    <div>
                      <p className={styles.featureCaption}>ends in:</p>
                      <p className={styles.featureValue}>25 min</p>
                    </div>
                    <div>
                      <p className={styles.featureCaption}>apps blocked:</p>
                      <div className={styles.appIcons} aria-hidden="true">
                        <span className={styles.appIcon}>IG</span>
                        <span className={styles.appIcon}>TT</span>
                        <span className={styles.appIcon}>R</span>
                      </div>
                    </div>
                  </div>
                </div>

                {trailingHistoryItems.map((item) => (
                  <div className={styles.historyItem} key={item.title}>
                    <div className={styles.historyTopline}>
                      <div>
                        <p className={styles.historyTitle}>{item.title}</p>
                        <p className={styles.historyDetail}>{item.detail}</p>
                      </div>
                      <p className={styles.historyTimestamp}>{item.timestamp}</p>
                    </div>
                  </div>
                ))}
                <p className={styles.seeMore}>see more</p>
              </div>
            </article>
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
                  <div className={styles.metricBadge} aria-hidden="true">
                    <span />
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
