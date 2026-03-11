import { ContentStack, type ContentItem } from '../components/ContentStack';
import { PageIntro } from '../components/PageIntro';

const items: ContentItem[] = [
  {
    title: 'Single source of navigation',
    body: 'The header and footer stay in the layout, so every page inherits the same navigation and brand shell.',
  },
  {
    title: 'Typed content blocks',
    body: 'The content for each page is local, typed, and easy to edit without adding a CMS or API dependency.',
  },
  {
    title: 'Ready for real content',
    body: 'Swap this placeholder copy for your actual services, biography, or contact details and the structure stays the same.',
  },
];

export function ContactPage() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Use this page for a contact form, location details, or direct outreach information. The scaffold already isolates page structure from shared layout concerns."
      />
      <ContentStack items={items} />
    </>
  );
}
