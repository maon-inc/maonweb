import styles from './PrivacyPage.module.css';

export function PrivacyPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last Updated: March 23, 2026</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              MAON Intelligence (&quot;MAON,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our mindset and wellness companion application and related services
              (collectively, the &quot;Service&quot;).
            </p>
            <p>
              By using MAON, you agree to the collection and use of information in
              accordance with this policy. If you do not agree with our policies and
              practices, please do not use our Service. For details about the AI
              technology powering MAON and how it handles your data, please see
              our{' '}
              <a className={styles.link} href="/ai-transparency">
                AI Transparency
              </a>{' '}
              page.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            <h3>1. Biometric and Biosignal Data</h3>
            <p>
              When you connect Apple Health to MAON, we may collect the following
              types of biometric and wellness data via Apple HealthKit:
            </p>
            <ul>
              <li>Heart rate, heart rate variability (HRV), and resting heart rate</li>
              <li>Sleep patterns and sleep stages</li>
              <li>Activity, steps, and movement data</li>
              <li>Body measurements (weight, height, body fat)</li>
              <li>Nutrition intake (caffeine, water, macronutrients)</li>
              <li>Respiratory rate and oxygen saturation</li>
              <li>Gait and balance metrics (walking speed, steadiness)</li>
              <li>Wellness symptoms (mood, fatigue, headache)</li>
              <li>
                Other sensor data from Apple Watch and HealthKit-compatible devices
              </li>
            </ul>

            <h3>2. App Usage and Screen Time Data</h3>
            <p>
              With your permission, we collect information about your digital habits
              through screen time APIs:
            </p>
            <ul>
              <li>App usage patterns and frequency</li>
              <li>Screen time duration and schedules</li>
              <li>App categories you interact with</li>
              <li>Device pickup frequency</li>
              <li>Notification patterns (aggregate, not content)</li>
            </ul>

            <h3>3. Information You Provide</h3>
            <ul>
              <li>Account information (email address, name, phone number)</li>
              <li>Device preferences and settings</li>
              <li>Mood check-ins and self-reported data</li>
              <li>Responses to prompts and interventions</li>
              <li>Feedback and communications with us</li>
            </ul>

            <h3>4. Phone Number and Communications Data</h3>
            <p>
              MAON&apos;s primary interaction happens through iMessage and SMS. When you
              opt in to communicate with MAON via text, we collect:
            </p>
            <ul>
              <li>Your phone number</li>
              <li>Message content exchanged with MAON (used to provide personalized wellness support)</li>
              <li>Communication logs (timestamps, delivery status)</li>
              <li>Your communication preferences and opt-in/opt-out status</li>
            </ul>

            <h3>5. Location Data</h3>
            <p>
              With your explicit permission, we collect location data to provide
              context-aware wellness insights:
            </p>
            <ul>
              <li>Significant location changes (visit and region transition events via iOS)</li>
              <li>Coarse location context (neighborhood-level, not continuous GPS tracking)</li>
            </ul>
            <p>
              Location data is used to understand how your environment relates to your
              wellbeing — for example, recommending nearby places for a walk or detecting
              changes in routine. You can revoke location access at any time in iOS Settings.
            </p>

            <h3>6. Automatically Collected Information</h3>
            <ul>
              <li>Device type, operating system, and version</li>
              <li>IP address and general location (country/region)</li>
              <li>App performance and crash data</li>
              <li>Usage analytics (features used, session duration)</li>
            </ul>

            <h3>7. Google Calendar Data</h3>
            <p>
              If you choose to connect your Google Calendar account to MAON, we access
              and may modify your calendar data through the Google Calendar API. The
              scope of access includes the ability to see, edit, share, and permanently
              delete all calendars you can access using Google Calendar. Specifically,
              we may read and interact with:
            </p>
            <ul>
              <li>Calendar event titles, dates, times, and durations</li>
              <li>Event frequency and scheduling patterns</li>
              <li>Free/busy status across all your calendars</li>
              <li>
                Calendar metadata (names, sharing settings) necessary to place wellness
                events in the right calendar
              </li>
            </ul>
            <p>
              We use this access to correlate your calendar data with biometric signals
              from your wearable (such as stress levels, heart rate variability, and
              sleep quality) in order to identify patterns — for example, how meeting
              density or schedule gaps relate to physiological stress markers. This
              analysis powers personalized wellness recommendations to help you optimize
              your daily routines.
            </p>
            <p>
              With your explicit consent, MAON may also create, modify, or delete
              calendar events on your behalf — for example, adding a recovery block
              after a high-stress period or removing a suggested event you no longer
              need. You will always be asked before any calendar write or delete action
              is taken. You can revoke calendar access at any time through your account
              settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>
                <strong>Provide personalized insights:</strong> Analyze your biometric and
                behavioral data to identify emotional patterns and provide relevant support
              </li>
              <li>
                <strong>Deliver interventions:</strong> Offer timely, supportive suggestions
                based on detected patterns in your data
              </li>
              <li>
                <strong>Improve our Service:</strong> Understand how users interact with
                MAON to enhance features and user experience
              </li>
              <li>
                <strong>Communicate with you:</strong> Send service-related notifications,
                updates, reminders, and wellness check-ins via SMS, voice, or push
                notifications
              </li>
              <li>
                <strong>Verify your identity:</strong> Send one-time verification codes
                (OTP) via SMS during account registration and login to confirm your identity
              </li>
              <li>
                <strong>Ensure security:</strong> Detect and prevent fraud, abuse, and
                security incidents
              </li>
              <li>
                <strong>Research and development:</strong> Develop new features and improve
                our AI models using aggregated, de-identified data
              </li>
              <li>
                <strong>Calendar-based insights:</strong> Correlate your Google Calendar
                data with biometric signals from your wearable to identify how scheduling
                patterns (meeting density, schedule gaps) relate to physiological stress
                markers, and — with your explicit consent — suggest or create calendar
                adjustments such as recovery blocks to help you optimize your wellbeing
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Share Your Information</h2>
            <p>
              <strong>We do not sell your personal data.</strong> We may share your
              information only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> We work with trusted third parties who
                help us operate our Service (cloud hosting, analytics, customer support,
                and communications platforms such as Twilio for SMS and voice services).
                These providers are bound by confidentiality obligations and process your
                data only on our behalf. AI inference runs entirely within Cloudflare&apos;s
                network and is not sent to any external AI provider — see our{' '}
                <a className={styles.link} href="/ai-transparency">
                  AI Transparency
                </a>{' '}
                page for full details. Google Calendar data is not shared with any
                third-party service providers except as necessary to provide the core
                functionality described in this policy.
              </li>
              <li>
                <strong>With your consent:</strong> We may share data when you explicitly
                authorize us to do so.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information if
                required by law, court order, or government request.
              </li>
              <li>
                <strong>Safety:</strong> We may share information if we believe it&apos;s
                necessary to prevent harm to you or others.
              </li>
              <li>
                <strong>Business transfers:</strong> In the event of a merger, acquisition,
                or sale of assets, your data may be transferred as part of that transaction.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul>
              <li>Encryption in transit using TLS 1.2 or higher</li>
              <li>Encryption at rest using AES-256</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security audits and monitoring</li>
              <li>Employee access limited on a need-to-know basis</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission or
              storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active
              or as needed to provide you with our Service. You may request deletion of
              your data at any time. Upon account deletion, we will remove or anonymize
              your personal data within 30 days, except where retention is required by law.
            </p>
            <p>
              Google Calendar data is retained only for as long as necessary to provide
              you with calendar-based wellness insights. If you disconnect your Google
              Calendar account or revoke access, we will delete all stored Google
              Calendar data within 30 days.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights and Choices</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
              <li>
                <strong>Withdraw consent:</strong> Withdraw previously given consent at any
                time
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <a className={styles.link} href="mailto:lks@maonhealth.com">
                lks@maonhealth.com
              </a>{' '}
              or{' '}
              <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                daniel.lee@maonhealth.com
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>Health Information Disclaimer</h2>
            <p>
              MAON is a consumer wellness application, not a healthcare provider. We are
              not a &quot;covered entity&quot; or &quot;business associate&quot; under the
              Health Insurance Portability and Accountability Act (HIPAA). This means
              HIPAA regulations do not apply to the data we collect.
            </p>
            <p>
              However, we treat your health-related data with the highest level of care
              and apply robust security measures that meet or exceed industry standards
              for protecting sensitive health information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>California Residents (CCPA/CPRA)</h2>
            <p>
              If you are a California resident, you have additional rights under the
              California Consumer Privacy Act (CCPA) and California Privacy Rights Act
              (CPRA):
            </p>
            <ul>
              <li>Right to know what personal information we collect and how it&apos;s used</li>
              <li>Right to delete your personal information</li>
              <li>
                Right to opt-out of the sale of personal information (we do not sell your
                data)
              </li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to limit use of sensitive personal information</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>International Users (GDPR)</h2>
            <p>
              If you are located in the European Economic Area (EEA), United Kingdom, or
              Switzerland, we process your data under the General Data Protection
              Regulation (GDPR). Our legal bases for processing include:
            </p>
            <ul>
              <li><strong>Consent:</strong> For biometric data and sensitive health information</li>
              <li><strong>Contract:</strong> To provide the Service you requested</li>
              <li><strong>Legitimate interests:</strong> To improve our Service and ensure security</li>
            </ul>
            <p>You may also lodge a complaint with your local data protection authority.</p>
          </section>

          <section className={styles.section}>
            <h2>SMS and Voice Communications</h2>
            <h3>Phone Verification (OTP)</h3>
            <p>
              During account registration and login, we send one-time verification codes
              (OTP) via SMS to the phone number you provide. These messages are sent
              through Auth0&apos;s phone verification flow, which uses Twilio as the
              underlying delivery provider. The sole purpose of these messages is to
              verify your identity, and no marketing content is included. By providing
              your phone number during sign-up, you consent to receiving these verification
              messages. Standard message and data rates may apply.
            </p>
            <h3>Optional Wellness Communications</h3>
            <p>
              If you separately opt in to receive additional SMS or voice communications
              from MAON, you may also receive:
            </p>
            <ul>
              <li>Wellness check-ins and reminders</li>
              <li>Service notifications and account alerts</li>
              <li>AI-generated supportive interventions</li>
            </ul>
            <p>
              <strong>Message frequency varies.</strong> Message and data rates may apply.
              You can opt out of wellness communications at any time by replying STOP to
              any SMS message or by adjusting your communication preferences in the app.
              Reply HELP for assistance. Opting out of wellness communications does not
              affect verification messages required for account security.
            </p>
            <p>
              When we send you SMS or voice communications, your phone number and message
              data are processed by Twilio in accordance with{' '}
              <a
                className={styles.link}
                href="https://www.twilio.com/en-us/legal/privacy"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twilio&apos;s Privacy Policy
              </a>
              . We do not share your phone number with third parties for marketing purposes.
            </p>
            <p>
              Your consent to receive optional wellness communications is not a condition
              of using the Service. However, phone number verification via OTP is required
              to create and access your account.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Google API Services User Data Policy</h2>
            <p>
              MAON&apos;s use and transfer to any other app of information received from
              Google APIs will adhere to the{' '}
              <a
                className={styles.link}
                href="https://developers.google.com/terms/api-services-user-data-policy"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <h3>How We Access Google Calendar Data</h3>
            <p>
              When you connect your Google Calendar account to MAON, we request access
              through Google&apos;s OAuth 2.0 authorization flow. You will be prompted by
              Google to explicitly grant MAON permission before any data is accessed or
              modified. We request the scope necessary to read your calendar events for
              biometric-correlation analysis and, with your separate in-app consent, to
              create or modify events (such as wellness blocks) on your behalf. This
              broader access is required because schedule adjustments — adding recovery
              time, rescheduling suggested events — involve write and delete operations
              across your calendars.
            </p>
            <h3>How We Use Google Calendar Data</h3>
            <p>We use your Google Calendar data exclusively to:</p>
            <ul>
              <li>
                Correlate calendar events (meeting density, schedule gaps, recurring
                commitments) with biometric signals from your wearable — such as stress
                levels, heart rate variability, and sleep quality — to identify patterns
                that affect your wellbeing
              </li>
              <li>
                Provide personalized wellness recommendations based on how your schedule
                relates to your physiological state (e.g., flagging high-stress meeting
                blocks, identifying recovery opportunities)
              </li>
              <li>
                Analyze scheduling patterns to detect signs of overwork, burnout, or
                insufficient rest
              </li>
              <li>
                With your explicit in-app consent, suggest or create calendar adjustments —
                such as adding recovery blocks after high-stress periods or rescheduling
                conflicting commitments — to help you optimize your daily routines
              </li>
              <li>
                Remove or modify calendar events that MAON previously created on your
                behalf, when you request it
              </li>
            </ul>
            <p>
              We do <strong>not</strong> use Google Calendar data for:
            </p>
            <ul>
              <li>Serving advertisements or targeting ads</li>
              <li>Selling or sharing data with third parties for their own purposes</li>
              <li>
                Training generalized AI or machine learning models unrelated to your
                personal wellness insights
              </li>
              <li>
                Reading event descriptions, attendee details, or private notes unless
                explicitly displayed to you within the app
              </li>
              <li>
                Any purpose other than providing and improving the MAON wellness features
                described in this policy
              </li>
            </ul>
            <h3>How We Store and Protect Google Calendar Data</h3>
            <p>
              All Google Calendar data is encrypted in transit (TLS 1.2+) and at rest
              (AES-256). Access to this data is strictly limited to the systems and
              personnel necessary to provide the Service. We do not store raw calendar
              data longer than necessary to generate your wellness insights.
            </p>
            <h3>How We Share Google Calendar Data</h3>
            <p>
              We do not sell, rent, or share your Google Calendar data with any third
              parties, except:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>As necessary to comply with applicable law, regulation, or legal process</li>
              <li>
                To protect the safety, rights, or property of MAON, our users, or the public
              </li>
            </ul>
            <h3>Limited Use Disclosure</h3>
            <p>
              Notwithstanding anything else in this Privacy Policy, MAON&apos;s use of
              information received from Google APIs adheres to the{' '}
              <a
                className={styles.link}
                href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements. Specifically:
            </p>
            <ul>
              <li>
                We only use Google Calendar data to provide and improve user-facing
                features that are prominent in the MAON application&apos;s user interface
              </li>
              <li>
                We do not transfer Google Calendar data to third parties unless necessary
                to provide or improve user-facing features, as required by law, or with
                the user&apos;s affirmative consent
              </li>
              <li>We do not use Google Calendar data for serving advertisements</li>
              <li>
                Humans do not read Google Calendar data unless we have your affirmative
                consent, it is necessary for security purposes, to comply with applicable
                law, or our use is limited to internal operations with data that has been
                aggregated and anonymized
              </li>
            </ul>
            <h3>Revoking Access</h3>
            <p>
              You can disconnect your Google Calendar from MAON at any time through your
              account settings in the app or by visiting your{' '}
              <a
                className={styles.link}
                href="https://myaccount.google.com/permissions"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Account permissions page
              </a>
              . Upon revocation, we will stop accessing your Google Calendar data and
              delete all stored Google Calendar data within 30 days.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Children&apos;s Privacy</h2>
            <p>
              MAON is not intended for children under the age of 13 (or 16 in the EEA).
              We do not knowingly collect personal information from children. If we learn
              that we have collected data from a child, we will delete it promptly.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any material changes by posting the new policy on this page and updating the
              &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className={styles.contactCard}>
              <p>
                <strong>MAON Intelligence</strong>
              </p>
              <p>
                Email:{' '}
                <a className={styles.link} href="mailto:lks@maonhealth.com">
                  lks@maonhealth.com
                </a>{' '}
                |{' '}
                <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                  daniel.lee@maonhealth.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
