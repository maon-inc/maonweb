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
    titlePrefix: "it's easy to picture the life you want.",
    titleEmphasis: 'living',
    titleSuffix: 'it is the hard part.',
    supportingText: 'Maon helps you catch the drift earlier.',
    cta: {
      label: 'say hi to maon',
      href: MAON_CTA_HREF,
    },
  },
  showcase: {
    messagesLabel: 'in your messages',
    historyLabel: 'recent support',
    storiesLabel: 'patterns',
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
        text: 'hi user, should we start with what keeps you steady or what tends to throw you off?',
        sender: 'maon',
        variant: 'incoming-tall',
        italicWord: 'user',
      },
      {
        id: 'reply-awareness',
        text: "uhhhh i don't catch it fast",
        sender: 'user',
        variant: 'outgoing-medium',
      },
      {
        id: 'prompt-awareness',
        text: 'what usually pulls you off track first: stress, your phone, or something else?',
        sender: 'maon',
        variant: 'incoming-question',
      },
      {
        id: 'reply-spiral',
        text: 'late scrolling and bad sleep usually do it. by the time i notice, everything feels harder',
        sender: 'user',
        variant: 'outgoing-large',
      },
    ],
    historyItems: [
      {
        title: 'screen time reset',
        detail: '30 min social app limit to break the scroll loop',
        timestamp: 'sat - 7:15 pm',
        railColor: '#c8b5ff',
        variant: 'featured',
        endsIn: '25 min',
        blockedApps: ['instagram', 'tiktok', 'reddit'],
      },
      {
        title: 'breathing reset',
        detail: '7-8-4 second exercise',
        timestamp: 'sat - 7 pm',
        railColor: '#c7f1f0',
        variant: 'compact',
      },
      {
        title: 'walk @ 7 pm monday',
        detail: 'added a walk to your apple calendar',
        timestamp: 'sat - 6:42 pm',
        railColor: '#f5d8c7',
        variant: 'compact',
      },
      {
        title: 'alarm @ 9:30 am sunday',
        detail: 'ease back into a steadier sleep rhythm',
        timestamp: 'sat - 6:18 pm',
        railColor: '#efcfd3',
        variant: 'compact',
      },
    ],
    metrics: [
      {
        label: 'EARLY SHIFT',
        value: '2h',
        description: 'your signals often start changing before the spiral feels obvious',
        tone: 'peach',
        badge: '3',
      },
      {
        label: 'PROGRESS',
        value: '18%',
        description: 'less stress this week when late-night scrolling dropped',
        tone: 'green',
        badge: '4',
      },
    ],
  },
  narrative: {
    intro: 'we understand...',
    statements: [
      {
        text: 'you can usually see the version of yourself you want',
        tone: 'default',
      },
      {
        text: 'holding onto it gets harder when stress and distractions pile up',
        tone: 'muted',
      },
      {
        text: 'maon helps catch the drift before it takes over',
        tone: 'serif-muted',
      },
    ],
  },
  howWeHelp: [
    {
      id: 'proactive-interventions',
      title: 'proactive interventions',
      summary:
        'when something starts to drift, maon nudges you back before it turns into a bigger mindset shift',
      accentColor: '#c6b5f5',
      previewImage: {
        alt: 'Proactive interventions preview',
        src: proactivePreview,
      },
      details: [
        'quick check-ins when focus slips',
        'short breathing resets',
        'temporary app limits',
        'prompts to move, go outside, or reset',
      ],
    },
    {
      id: 'personal-patterns',
      title: 'personal patterns',
      summary:
        'with the context you choose to share, maon connects the dots across your signals, habits, and routines',
      accentColor: '#7eaeea',
      previewImage: {
        alt: 'Personal patterns preview',
        src: patternsPreview,
      },
      details: [
        'show what keeps you clear and steady',
        'shared health, location, screen time, and calendar add context',
        'spot when scrolling, packed days, or low recovery cloud the next day',
        'highlight what tends to come before a shift',
      ],
    },
    {
      id: 'adaptive-over-time',
      title: 'adaptive over time',
      summary:
        'the more you use maon, the better it learns which signals matter and what helps you stay steady',
      accentColor: '#59c85b',
      previewImage: {
        alt: 'Adaptive over time preview',
        src: adaptivePreview,
      },
      details: [
        'learns which nudges help',
        'learns when to check in and when to stay quiet',
        'gets better at catching drift early',
        'suggests places, activities, and routines that seem to help',
      ],
    },
  ],
  finalCta: {
    title: 'staying steady takes support',
    subtitle: 'maon helps you stay steady longer',
    cta: {
      label: 'say hi to maon',
      href: MAON_CTA_HREF,
    },
  },
};
