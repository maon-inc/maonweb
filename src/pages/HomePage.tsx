import { FinalCtaSection } from '../components/FinalCtaSection';
import { HomeHero } from '../components/HomeHero';
import { HowWeHelpSection } from '../components/HowWeHelpSection';
import { NarrativeSection } from '../components/NarrativeSection';
import { ShowcaseSection } from '../components/ShowcaseSection';
import { homePageContent } from '../content/homePageContent';

export function HomePage() {
  return (
    <>
      <HomeHero content={homePageContent.hero} />
      <ShowcaseSection content={homePageContent.showcase} />
      <NarrativeSection content={homePageContent.narrative} />
      <HowWeHelpSection items={homePageContent.howWeHelp} />
      <FinalCtaSection content={homePageContent.finalCta} />
    </>
  );
}
