import { FinalCtaSection } from '../components/FinalCtaSection';
import { HomeHero } from '../components/HomeHero';
import { HowWeHelpSection } from '../components/HowWeHelpSection';
import { NarrativeSection } from '../components/NarrativeSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { homePageContent } from '../content/homePageContent';
import topScenePosterUrl from '../assets/home-top-scene.svg';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.topScene} data-testid="home-top-scene">
        <div
          className={styles.topSceneMedia}
          data-testid="home-top-scene-media"
          style={{ backgroundImage: `url(${topScenePosterUrl})` }}
        />
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
