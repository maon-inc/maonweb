import adaptivePreview from '../assets/how-we-help-adaptive-preview.svg';
import patternsPreview from '../assets/how-we-help-patterns-preview.svg';
import proactivePreview from '../assets/how-we-help-proactive-preview.svg';
import { MAON_CTA_HREF } from './contactLinks';

export type HomeHeroContent = {
  eyebrow: string;
  titlePrefix: string;
  titleEmphasis: string;
  titleSuffix: string;
  supportingText: string;
  cta: {
    label: string;
    href: string;
  };
};

export type ShowcaseMetric = {
  label: string;
  value: string;
  description: string;
  tone: 'peach' | 'green';
  badge: string;
};

export type ShowcaseMessage = {
  id: string;
  text: string;
  sender: 'maon' | 'user';
  variant:
    | 'incoming-short'
    | 'incoming-tall'
    | 'incoming-question'
    | 'outgoing-short'
    | 'outgoing-medium'
    | 'outgoing-large';
  italicWord?: string;
};

export type ShowcaseBlockedApp = 'instagram' | 'tiktok' | 'reddit';

export type ShowcaseHistoryItem = {
  title: string;
  detail: string;
  timestamp: string;
  railColor: string;
  variant: 'featured' | 'compact';
  endsIn?: string;
  blockedApps?: ShowcaseBlockedApp[];
};

export type ShowcaseContent = {
  messagesLabel: string;
  historyLabel: string;
  storiesLabel: string;
  messages: ShowcaseMessage[];
  historyItems: ShowcaseHistoryItem[];
  metrics: ShowcaseMetric[];
};

export type NarrativeContent = {
  intro: string;
  statements: Array<{
    text: string;
    tone: 'muted' | 'default' | 'serif-muted';
  }>;
};

export type HowWeHelpItem = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  accentColor: string;
  previewImage: {
    alt: string;
    src: string;
  };
};

export type FinalCtaContent = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
  };
};

export type HomePageContent = {
  hero: HomeHeroContent;
  showcase: ShowcaseContent;
  narrative: NarrativeContent;
  howWeHelp: HowWeHelpItem[];
  finalCta: FinalCtaContent;
};

export const homePageContent: HomePageContent = {
  hero: {
    eyebrow: 'MAON',
    titlePrefix: 'what if an AI agent\'s only job was to keep your',
    titleEmphasis: 'mindset right?',
    titleSuffix: '',
    supportingText: 'Maon does that with proactive interventions',
    cta: {
      label: 'say hi to maon',
      href: MAON_CTA_HREF,
    },
  },
  showcase: {
    messagesLabel: 'in your messages',
    historyLabel: 'interventions history',
    storiesLabel: 'stories',
    messages: [
      {
        id: 'prompt-name',
        text: 'what should i call you?',
        sender: 'maon',
        variant: 'incoming-short',
      },
      {
        id: 'reply-name',
        text: 'hey im user.',
        sender: 'user',
        variant: 'outgoing-short',
        italicWord: 'user.',
      },
      {
        id: 'prompt-intro',
        text: 'hi user, want to hear about me, or should we start with you?',
        sender: 'maon',
        variant: 'incoming-tall',
        italicWord: 'user',
      },
      {
        id: 'reply-awareness',
        text: 'ik you step in right away',
        sender: 'user',
        variant: 'outgoing-medium',
      },
      {
        id: 'prompt-awareness',
        text: 'when you start slipping do you notice it? or does it hit you later?',
        sender: 'maon',
        variant: 'incoming-question',
      },
      {
        id: 'reply-spiral',
        text: 'i don’t notice it until it gets really bad and then i start spiraling',
        sender: 'user',
        variant: 'outgoing-large',
      },
    ],
    historyItems: [
      {
        title: 'screen time',
        detail: '30 min limit on social media',
        timestamp: 'sat - 7:15 pm',
        railColor: '#c8b5ff',
        variant: 'featured',
        endsIn: '25 min',
        blockedApps: ['instagram', 'tiktok', 'reddit'],
      },
      {
        title: 'breathing exercise',
        detail: '7-8-4 second exercise',
        timestamp: 'sat - 7 pm',
        railColor: '#c7f1f0',
        variant: 'compact',
      },
      {
        title: 'workout @ 7 pm monday',
        detail: 'added workout to your apple calendar',
        timestamp: 'sat - 6:42 pm',
        railColor: '#f5d8c7',
        variant: 'compact',
      },
      {
        title: 'alarm @ 9:30 am sunday',
        detail: 'get back into a good sleep rhythm',
        timestamp: 'sat - 6:18 pm',
        railColor: '#efcfd3',
        variant: 'compact',
      },
    ],
    metrics: [
      {
        label: 'EARLY SPIRAL',
        value: '2h',
        description: 'before a spiral, your body lets us know',
        tone: 'peach',
        badge: '3',
      },
      {
        label: 'PROGRESS',
        value: '18%',
        description: 'less destress over the past week',
        tone: 'green',
        badge: '4',
      },
    ],
  },
  narrative: {
    intro: 'we understand...',
    statements: [
      {
        text: 'small things pile up and quietly change how you see everything',
        tone: 'default',
      },
      {
        text: 'most tools only step in after your mindset has already shifted',
        tone: 'muted',
      },
      {
        text: 'but maon catches the drift early — before it changes how you show up',
        tone: 'serif-muted',
      },
    ],
  },
  howWeHelp: [
    {
      id: 'proactive-interventions',
      title: 'proactive interventions',
      summary: 'when something starts to drift, maon helps you course-correct before your mindset shifts',
      accentColor: '#c6b5f5',
      previewImage: {
        alt: 'Proactive interventions preview',
        src: proactivePreview,
      },
      details: [
        'quick check-ins over text to refocus',
        'short breathing exercises to recenter when tension builds',
        'blocking distracting apps using screen time',
        'suggest and schedule time for a hike',
      ],
    },
    {
      id: 'personal-patterns',
      title: 'personal patterns',
      summary: 'most people do not see what actually shapes how they think and show up. maon connects the dots',
      accentColor: '#7eaeea',
      previewImage: {
        alt: 'Personal patterns preview',
        src: patternsPreview,
      },
      details: [
        'help you understand what keeps your thinking clear',
        'notice when night scrolling clouds your next day',
        'show when outdoor time sharpens your focus',
        'highlight days where your mindset or clarity shifts',
      ],
    },
    {
      id: 'adaptive-over-time',
      title: 'adaptive over time',
      summary: 'the more you use maon, the more it learns what keeps your mindset where it needs to be',
      accentColor: '#59c85b',
      previewImage: {
        alt: 'Adaptive over time preview',
        src: adaptivePreview,
      },
      details: [
        'learns what interventions work best for you',
        'adjusts when to check in and when to stay quiet',
        'recognizes the early signs your mindset is drifting',
        'gets better at catching shifts before they take hold',
      ],
    },
  ],
  finalCta: {
    title: "the right mindset doesn't build itself",
    subtitle: 'maon helps you maintain it',
    cta: {
      label: 'say hi to maon',
      href: MAON_CTA_HREF,
    },
  },
};
