import styles from './PrivacyPage.module.css';

export function SupportPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.updated}>Last Updated: March 24, 2026</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              For any questions, issues, or feedback, reach out to us at{' '}
              <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                daniel.lee@maonhealth.com
              </a>
              . We aim to respond to all inquiries within 48 hours.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Refund Policy</h2>
            <p>
              MAON offers a straightforward refund policy for our $12/month
              subscription:
            </p>
            <ul>
              <li>
                <strong>Within 14 days of your first payment:</strong> You may
                request a full refund, no questions asked. Simply email us at{' '}
                <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                  daniel.lee@maonhealth.com
                </a>{' '}
                with your account email and we will process your refund.
              </li>
              <li>
                <strong>After 14 days:</strong> You may cancel your subscription
                at any time, but refunds are not issued for the current billing
                period. You will continue to have full access to MAON until the
                end of your paid period.
              </li>
              <li>
                <strong>App Store &amp; Google Play purchases:</strong> If you
                subscribed through the Apple App Store or Google Play Store,
                refunds must be requested directly through the respective store.
                MAON cannot process refunds for purchases made through
                third-party platforms.
              </li>
            </ul>
            <p>
              To request a refund, email{' '}
              <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                daniel.lee@maonhealth.com
              </a>{' '}
              with your account email address and the reason for your request.
              Refunds are typically processed within 5&ndash;10 business days.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Cancellation</h2>
            <p>
              You can cancel your MAON subscription at any time. Here&apos;s
              what happens when you cancel:
            </p>
            <ul>
              <li>
                Your subscription will remain active until the end of your
                current billing period.
              </li>
              <li>
                You will not be charged again after cancellation.
              </li>
              <li>
                Your data will be retained for 30 days after your subscription
                ends, giving you time to resubscribe or request a data export.
              </li>
            </ul>
            <p>
              To cancel, manage your subscription through your account settings
              or email us at{' '}
              <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                daniel.lee@maonhealth.com
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>Account &amp; Data</h2>
            <ul>
              <li>
                <strong>Account deletion:</strong> To permanently delete your
                account and all associated data, email{' '}
                <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                  daniel.lee@maonhealth.com
                </a>{' '}
                from the email address associated with your account. Deletion
                requests are processed within 30 days.
              </li>
              <li>
                <strong>Data export:</strong> You may request an export of your
                personal data at any time by emailing{' '}
                <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                  daniel.lee@maonhealth.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Bug Reports &amp; Feedback</h2>
            <p>
              Found a bug or have a suggestion? We&apos;d love to hear from you.
              Email{' '}
              <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                daniel.lee@maonhealth.com
              </a>{' '}
              with a description of the issue or your feedback and we&apos;ll
              get back to you as soon as possible.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
