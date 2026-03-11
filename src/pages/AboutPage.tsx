import { ContentStack, type ContentItem } from '../components/ContentStack';
import { PageIntro } from '../components/PageIntro';

const items: ContentItem[] = [
  {
    title: 'Why React here',
    body: 'React gives you reusable sections, consistent navigation, and a straightforward path if the site grows from one page to a few more.',
  },
  {
    title: 'Why this layout',
    body: 'The router and site layout are established from the start, so new pages plug into a shared shell instead of repeating structure.',
  },
  {
    title: 'Why no extra state tools',
    body: 'For a marketing or brochure-style site, static typed content and local component state are enough until a real cross-page requirement appears.',
  },
];

export function AboutPage() {
  return (
    <>
      <PageIntro
        title="About this starter"
        description="This scaffold is optimized for a small brochure, portfolio, or business site that needs strong structure without framework excess."
      />
      <ContentStack items={items} />
    </>
  );
}
