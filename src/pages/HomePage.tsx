import { FeatureGrid, type Feature } from '../components/FeatureGrid';
import { HeroSection } from '../components/HeroSection';

const features: Feature[] = [
  {
    title: 'A route-first structure',
    description:
      'Pages own page-level behavior, while shared sections stay reusable and isolated in components.',
  },
  {
    title: 'A small styling surface',
    description:
      'CSS Modules keep component styles local, with a single global theme file for tokens and layout primitives.',
  },
  {
    title: 'A clean growth path',
    description:
      'The scaffold is intentionally light now, but it can absorb more pages without changing the architecture.',
  },
];

export function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Small-site React starter"
        title="Build a polished site without overbuilding it."
        description="This starter is structured for a focused website project: a strong landing page, a couple of supporting routes, and shared UI that stays easy to maintain."
        primaryCta={{ label: 'View contact page', to: '/contact' }}
        secondaryCta={{ label: 'Learn about the setup', to: '/about' }}
      />
      <FeatureGrid
        heading="Architecture that fits the size of the site"
        intro="The project starts with the minimum structure needed for a clean small React site, without forcing backend or app-state complexity into a mostly static experience."
        features={features}
      />
    </>
  );
}
