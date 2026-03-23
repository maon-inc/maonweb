import styles from './PrivacyPage.module.css';

export function TermsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last Updated: March 23, 2026</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using MAON (&quot;the Service&quot;), you agree to be bound by
              these Terms of Service (&quot;Terms&quot;). If you disagree with any part of
              these terms, you may not access the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and MAON
              Intelligence (&quot;MAON,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              regarding your use of the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Description of Service</h2>
            <p>
              MAON is an AI-powered mindset and wellness companion that analyzes biometric data
              from Apple HealthKit and app usage patterns to provide insights and
              supportive interventions. The Service includes:
            </p>
            <ul>
              <li>
                Integration with Apple Watch and Apple HealthKit
              </li>
              <li>
                Analysis of biometric signals including heart rate, sleep patterns, and
                activity data
              </li>
              <li>Screen time and app usage pattern analysis</li>
              <li>AI-generated insights about emotional patterns</li>
              <li>Optional supportive interventions and suggestions</li>
              <li>
                SMS and voice-based communications, reminders, and check-ins (with your
                consent)
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Medical Disclaimer</h2>
            <h3>IMPORTANT: MAON IS NOT A MEDICAL SERVICE</h3>
            <ul>
              <li>MAON does <strong>not</strong> diagnose mental health conditions</li>
              <li>MAON does <strong>not</strong> provide medical advice, treatment, or therapy</li>
              <li>MAON does <strong>not</strong> replace professional healthcare providers</li>
              <li>MAON does <strong>not</strong> label you with disorders or conditions</li>
            </ul>
            <p>
              The Service is intended for informational and wellness purposes only. The
              insights, patterns, and suggestions provided by MAON should not be
              considered medical advice.
            </p>
            <p>
              If you are experiencing a mental health crisis, suicidal thoughts, or any
              medical emergency, please contact emergency services (911), a crisis
              hotline, or seek immediate professional help.
            </p>
            <p>
              Always consult with a qualified healthcare provider before making decisions
              about your health. Do not disregard professional medical advice or delay
              seeking treatment based on information from MAON.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Eligibility</h2>
            <p>To use MAON, you must:</p>
            <ul>
              <li>Be at least 13 years of age (or 16 in the European Economic Area)</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate and complete information when creating an account</li>
            </ul>
            <p>
              If you are under 18, you represent that you have your parent or guardian&apos;s
              permission to use the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Account Responsibilities</h2>
            <p>When you create an account with us, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p>
              You may not share your account credentials with others or use another
              person&apos;s account without permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. User Data and Privacy</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal
              information is governed by our{' '}
              <a className={styles.link} href="/privacy">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference. For information
              about the AI technology we use, please see our{' '}
              <a className={styles.link} href="/ai-transparency">
                AI Transparency
              </a>{' '}
              page.
            </p>
            <p>By using the Service, you acknowledge that:</p>
            <ul>
              <li>We collect biometric data from your connected wearable devices</li>
              <li>We collect app usage and screen time data with your permission</li>
              <li>We use AI to analyze this data and provide insights</li>
              <li>You have control over your data and can request its deletion at any time</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Use the Service for any commercial purpose without our consent</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Collect data about other users without their consent</li>
              <li>Use automated systems (bots, scrapers) to access the Service</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property</h2>
            <p>
              The Service, including its content, features, and functionality, is owned
              by MAON Intelligence and is protected by intellectual property laws. This
              includes but is not limited to:
            </p>
            <ul>
              <li>Software, algorithms, and AI models</li>
              <li>Trademarks, logos, and brand elements</li>
              <li>Visual design and user interface</li>
              <li>Written content and documentation</li>
            </ul>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to use
              the Service for personal, non-commercial purposes in accordance with these
              Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. User Content</h2>
            <p>
              You retain ownership of any content you submit to the Service (such as mood
              check-ins, notes, or feedback). By submitting content, you grant us a
              license to use, process, and analyze this content to provide and improve
              the Service.
            </p>
            <p>
              You represent that you have the right to submit any content you provide and
              that it does not violate any third-party rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Third-Party Integrations</h2>
            <p>
              The Service integrates with third-party devices, platforms, and service
              providers (such as Apple HealthKit, Google Calendar, and Twilio for
              communications). Your use of these third-party services is subject to their
              respective terms and privacy policies.
            </p>
            <p>
              We are not responsible for the operation, availability, or content of
              third-party services. Any issues with third-party integrations should be
              directed to the respective service provider.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. SMS and Voice Communications</h2>
            <p>
              MAON may offer SMS and voice communication features powered by Twilio. By
              opting in to receive SMS or voice communications, you agree to the following:
            </p>
            <p><strong>Consent:</strong> You expressly consent to receive automated SMS messages and/or voice calls from MAON at the phone number you provide, including wellness check-ins, reminders, service notifications, and supportive interventions</p>
            <p><strong>Frequency:</strong> Message frequency varies based on your settings and usage patterns</p>
            <p><strong>Costs:</strong> Message and data rates may apply. MAON is not responsible for any charges from your mobile carrier</p>
            <p><strong>Opt-out:</strong> You may opt out at any time by replying STOP to any SMS message or by updating your preferences in the app. After opting out, you will receive a one-time confirmation message</p>
            <p>
              <strong>Help:</strong> Reply HELP to any message for assistance, or contact
              us at{' '}
              <a className={styles.link} href="mailto:lks@maonhealth.com">
                lks@maonhealth.com
              </a>{' '}
              or{' '}
              <a className={styles.link} href="mailto:daniel.lee@maonhealth.com">
                daniel.lee@maonhealth.com
              </a>
            </p>
            <p><strong>Not required:</strong> Consent to receive SMS or voice communications is not a condition of purchasing any goods or services from MAON</p>
            <p>
              Supported carriers include but are not limited to AT&amp;T, T-Mobile,
              Verizon, and Sprint. Service may not be available on all carriers.
            </p>
            <p>
              MAON and its service providers (including Twilio) may use your phone number
              and messaging data only to deliver the communications you have consented to
              and for no other purpose. We will not share your phone number with third
              parties for their own marketing purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Disclaimers</h2>
            <p>
              <strong>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </strong>
            </p>
            <p>We do not warrant that:</p>
            <ul>
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from the Service will be accurate or reliable</li>
              <li>The Service will meet your specific requirements or expectations</li>
              <li>Any defects in the Service will be corrected</li>
            </ul>
            <p>
              The insights and suggestions provided by MAON are generated by AI and may
              not always be accurate. You should use your own judgment when acting on any
              information from the Service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Limitation of Liability</h2>
            <p>
              <strong>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAON INTELLIGENCE SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES.
              </strong>
            </p>
            <p>This includes, but is not limited to:</p>
            <ul>
              <li>Any health outcomes or decisions based on the Service</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Personal injury or emotional distress</li>
              <li>Errors or inaccuracies in the AI-generated insights</li>
              <li>Unauthorized access to your data</li>
            </ul>
            <p>
              Our total liability for any claims arising from your use of the Service
              shall not exceed the amount you paid us, if any, in the twelve (12) months
              preceding the claim.
            </p>
          </section>

          <section className={styles.section}>
            <h2>14. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless MAON Intelligence, its officers,
              directors, employees, and agents from any claims, damages, losses, or
              expenses (including reasonable attorney&apos;s fees) arising from your use of
              the Service, violation of these Terms, or infringement of any third-party
              rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2>15. Termination</h2>
            <p>
              You may terminate your account at any time by contacting us or using the
              account deletion feature in the app.
            </p>
            <p>
              We may terminate or suspend your access to the Service immediately, without
              prior notice, if:
            </p>
            <ul>
              <li>You violate these Terms</li>
              <li>Your use of the Service poses a security risk</li>
              <li>We are required to do so by law</li>
              <li>We discontinue the Service</li>
            </ul>
            <p>
              Upon termination, your right to use the Service will immediately cease.
              Provisions that by their nature should survive termination shall survive.
            </p>
          </section>

          <section className={styles.section}>
            <h2>16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you
              of material changes by posting the updated Terms and updating the
              &quot;Last Updated&quot; date. Your continued use of the Service after such
              changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>17. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of the United States, without regard to conflict of law principles. Any
              disputes arising under these Terms shall be resolved in the courts located
              in the United States.
            </p>
          </section>

          <section className={styles.section}>
            <h2>18. Dispute Resolution</h2>
            <p>In the event of any dispute arising from these Terms or your use of the Service:</p>
            <ul>
              <li>You agree to first attempt to resolve the dispute informally by contacting us</li>
              <li>If the dispute cannot be resolved informally, you agree to submit to binding arbitration</li>
              <li>You waive any right to participate in a class action lawsuit or class-wide arbitration</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>19. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid,
              that provision shall be limited or eliminated to the minimum extent
              necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className={styles.section}>
            <h2>20. Entire Agreement</h2>
            <p>
              These Terms, together with our{' '}
              <a className={styles.link} href="/privacy">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a className={styles.link} href="/ai-transparency">
                AI Transparency
              </a>{' '}
              page, constitute the entire agreement between you and MAON Intelligence
              regarding the Service and supersede all prior agreements and
              understandings.
            </p>
          </section>

          <section className={styles.section}>
            <h2>21. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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
