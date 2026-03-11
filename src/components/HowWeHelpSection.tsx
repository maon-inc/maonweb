import { useState } from 'react';

import type { HowWeHelpItem } from '../content/homePageContent';
import { HowWeHelpCard } from './HowWeHelpCard';
import styles from './HowWeHelpSection.module.css';

type HowWeHelpSectionProps = {
  items: HowWeHelpItem[];
  initialSelectedId?: string | null;
};

export function HowWeHelpSection({
  items,
  initialSelectedId = null,
}: HowWeHelpSectionProps) {
  const validInitialSelection =
    initialSelectedId && items.some((item) => item.id === initialSelectedId)
      ? initialSelectedId
      : null;
  const [selectedId, setSelectedId] = useState<string | null>(validInitialSelection);
  const safeSelectedId = items.some((item) => item.id === selectedId) ? selectedId : null;

  function handleToggle(id: string) {
    const item = items.find((entry) => entry.id === id);

    if (!item || item.details.length === 0) {
      setSelectedId(null);
      return;
    }

    setSelectedId((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className={styles.section} aria-labelledby="how-we-help-title">
      <div className="container">
        <div className={styles.headingBlock}>
          <h2 className={styles.heading} id="how-we-help-title">
            how we help
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <HowWeHelpCard
              details={item.details}
              expanded={safeSelectedId === item.id}
              id={item.id}
              key={item.id}
              onToggle={handleToggle}
              summary={item.summary}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
