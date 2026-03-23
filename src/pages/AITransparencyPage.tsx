import styles from './PrivacyPage.module.css';

export function AITransparencyPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>AI Transparency</h1>
        <p className={styles.updated}>Last Updated: March 23, 2026</p>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Our AI Technology</h2>
            <p>
              At MAON, we believe you deserve to know exactly what technology powers
              the AI you interact with. We are committed to full transparency about
              our AI infrastructure and how your data is handled.
            </p>
            <p>
              <strong>
                MAON uses Cloudflare Workers AI — not Claude, Anthropic, OpenAI, or
                any other third-party AI API.
              </strong>{' '}
              All AI inference runs entirely within Cloudflare&apos;s network,
              meaning your conversations and health data never leave Cloudflare&apos;s
              infrastructure to reach an external AI provider.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Model &amp; Infrastructure</h2>
            <p>
              Here is a complete breakdown of the AI infrastructure powering MAON:
            </p>
            <ul>
              <li>
                <strong>Model:</strong> @cf/moonshotai/kimi-k2.5 (Moonshot Kimi
                K2.5) — a large language model developed by Moonshot AI,
                hosted and served by Cloudflare Workers AI
              </li>
              <li>
                <strong>AI Gateway:</strong> Cloudflare AI Gateway (gateway
                ID: &quot;sendblue&quot;) — provides logging, caching controls, and
                rate limiting within the Cloudflare dashboard
              </li>
              <li>
                <strong>Binding:</strong> Cloudflare Workers AI native binding — the
                model is accessed directly via Cloudflare&apos;s Workers runtime, not
                through any external API call
              </li>
              <li>
                <strong>Caching:</strong> skipCache is set to true on all AI calls —
                every response is generated fresh; no cached AI responses are served
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Data Privacy Benefits</h2>
            <p>
              Our choice of Cloudflare Workers AI was deliberate and driven by data
              privacy:
            </p>
            <ul>
              <li>
                <strong>No data leaves Cloudflare&apos;s network</strong> — Workers AI
                runs inference on Cloudflare&apos;s own hardware. Your messages,
                health data, calendar information, and screen time data are never sent
                to a third-party AI provider
              </li>
              <li>
                <strong>No third-party AI APIs</strong> — unlike services that call
                out to OpenAI, Anthropic, or other providers, MAON&apos;s AI stays
                entirely within Cloudflare&apos;s infrastructure
              </li>
              <li>
                <strong>No training on your data</strong> — Cloudflare states that
                Workers AI inputs and outputs are not used to train models
              </li>
              <li>
                <strong>Fewer network hops</strong> — because everything stays within
                one provider, there are fewer points where data could be intercepted
                or leaked
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. AI Gateway &amp; Logging</h2>
            <p>
              Cloudflare AI Gateway sits between our application code and the AI
              model. It provides:
            </p>
            <ul>
              <li>
                <strong>Request logging</strong> — we can monitor AI requests for
                quality assurance and debugging purposes
              </li>
              <li>
                <strong>Rate limiting</strong> — protects the service from abuse and
                ensures fair usage
              </li>
              <li>
                <strong>Analytics</strong> — helps us understand usage patterns to
                improve the service
              </li>
            </ul>
            <p>
              All logging and analytics data remains within our Cloudflare account and
              is subject to the data retention and security practices described in
              our{' '}
              <a className={styles.link} href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. What This Means for You</h2>
            <p>
              In plain terms: when you talk to MAON, your messages are processed by an
              open-weight AI model running directly on Cloudflare&apos;s servers. Your
              data does not get sent to OpenAI, Anthropic, Google, or any other
              external AI company. This architecture was chosen specifically to
              minimize the number of third parties that handle your sensitive health
              and personal data.
            </p>
            <p>
              We believe this is one of the most privacy-favorable ways to deliver
              AI-powered health support, and we are committed to maintaining this
              standard as our technology evolves.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Contact Us</h2>
            <p>
              If you have questions about our AI technology, data handling practices,
              or anything covered on this page, please reach out:
            </p>
            <div className={styles.contactCard}>
              <p>
                <strong>Email:</strong>{' '}
                <a className={styles.link} href="mailto:lks@maonhealth.com">
                  lks@maonhealth.com
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
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
