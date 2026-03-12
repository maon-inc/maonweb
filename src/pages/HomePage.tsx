import { useEffect, useState } from 'react';

import { FinalCtaSection } from '../components/FinalCtaSection';
import { HomeHero } from '../components/HomeHero';
import { HowWeHelpSection } from '../components/HowWeHelpSection';
import { NarrativeSection } from '../components/NarrativeSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { homePageContent } from '../content/homePageContent';
import topScenePosterUrl from '../assets/home-top-scene.svg';
import topSceneLoopUrl from '../assets/home-top-scene-loop.mp4';
import styles from './HomePage.module.css';

export function HomePage() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => {
      mediaQuery.removeEventListener('change', updatePreference);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div
        className={styles.topScene}
        data-testid="home-top-scene"
        style={{ backgroundImage: `url(${topScenePosterUrl})` }}
      >
        {prefersReducedMotion ? null : (
          <video
            aria-hidden="true"
            autoPlay
            className={styles.topSceneVideo}
            data-testid="home-top-scene-video"
            loop
            muted
            playsInline
            poster={topScenePosterUrl}
            preload="auto"
          >
            <source src={topSceneLoopUrl} type="video/mp4" />
          </video>
        )}
        <div className={styles.topSceneInner}>
          <HomeHero content={homePageContent.hero} />
          <ShowcaseSection content={homePageContent.showcase} />
        </div>
      </div>
      <NarrativeSection content={homePageContent.narrative} />
      <HowWeHelpSection items={homePageContent.howWeHelp} />
      <FinalCtaSection content={homePageContent.finalCta} />
    </div>
  );
}
