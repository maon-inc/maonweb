import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

import type { NarrativeContent } from '../content/homePageContent';
import styles from './NarrativeSection.module.css';

type NarrativeSectionProps = {
  content: NarrativeContent;
};

const DESKTOP_BREAKPOINT = 1024;
const DESKTOP_STEP_COUNT = 4;
const STATIC_ACTIVE_INDEX = 1;
const ANIMATED_START_INDEX = 0;

type NarrativeLine = {
  key: string;
  text: string;
  variant: 'intro' | 'default' | 'muted' | 'serif-muted';
};

type NarrativeLineVisualState = 'previous' | 'active' | 'next' | 'hidden-above' | 'hidden-below';

export function getNarrativeActiveIndex(
  scrollOffset: number,
  stepHeight: number,
  totalLines: number,
) {
  if (totalLines <= 1) {
    return 0;
  }

  const safeStepHeight = Math.max(stepHeight, 1);
  const clamped = Math.max(0, scrollOffset);

  return Math.min(totalLines - 1, Math.floor(clamped / safeStepHeight));
}

export function shouldAnimateNarrative(viewportWidth: number, prefersReducedMotion: boolean) {
  return viewportWidth >= DESKTOP_BREAKPOINT && !prefersReducedMotion;
}

export function getNarrativeLineVisualState(
  lineIndex: number,
  activeIndex: number,
): NarrativeLineVisualState {
  const relativeIndex = lineIndex - activeIndex;

  if (relativeIndex === 0) {
    return 'active';
  }

  if (relativeIndex === -1) {
    return 'previous';
  }

  if (relativeIndex === 1) {
    return 'next';
  }

  return relativeIndex < 0 ? 'hidden-above' : 'hidden-below';
}

function getNarrativeLineVisualStateClass(
  visualState: NarrativeLineVisualState,
  classes: Record<string, string>,
) {
  switch (visualState) {
    case 'previous':
      return classes.linePrevious;
    case 'active':
      return classes.lineCentered;
    case 'next':
      return classes.lineNext;
    case 'hidden-above':
      return classes.lineHiddenAbove;
    case 'hidden-below':
      return classes.lineHiddenBelow;
  }
}

export function getNarrativeScrollOffset(
  trackTop: number,
  viewportHeight: number,
  totalLines: number,
) {
  if (totalLines <= 1) {
    return 0;
  }

  const safeViewportHeight = Math.max(viewportHeight, 1);
  const maxOffset = safeViewportHeight * totalLines - 1;

  return Math.min(Math.max(-trackTop, 0), maxOffset);
}

export function NarrativeSection({ content }: NarrativeSectionProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(STATIC_ACTIVE_INDEX);
  const [isAnimatedDesktop, setIsAnimatedDesktop] = useState(false);

  const lines = useMemo<NarrativeLine[]>(
    () => [
      { key: 'intro', text: content.intro, variant: 'intro' },
      ...content.statements.map((statement) => ({
        key: statement.text,
        text: statement.text,
        variant: statement.tone,
      })),
    ],
    [content.intro, content.statements],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    const updateMode = () => {
      const nextAnimated = shouldAnimateNarrative(
        window.innerWidth,
        mediaQuery?.matches ?? false,
      );

      setIsAnimatedDesktop(nextAnimated);
      setActiveIndex(nextAnimated ? ANIMATED_START_INDEX : STATIC_ACTIVE_INDEX);
    };

    updateMode();

    const handleMediaChange = () => updateMode();

    window.addEventListener('resize', updateMode);
    mediaQuery?.addEventListener?.('change', handleMediaChange);

    return () => {
      window.removeEventListener('resize', updateMode);
      mediaQuery?.removeEventListener?.('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isAnimatedDesktop || !trackRef.current || typeof window === 'undefined') {
      return;
    }

    let frameId = 0;

    const updateStep = () => {
      frameId = 0;

      const track = trackRef.current;

      if (!track) {
        return;
      }

      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollOffset = getNarrativeScrollOffset(rect.top, viewportHeight, lines.length);
      const nextIndex = getNarrativeActiveIndex(
        scrollOffset,
        viewportHeight,
        lines.length,
      );

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    };

    const requestStepUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateStep);
    };

    requestStepUpdate();

    window.addEventListener('scroll', requestStepUpdate, { passive: true });
    window.addEventListener('resize', requestStepUpdate);

    return () => {
      window.removeEventListener('scroll', requestStepUpdate);
      window.removeEventListener('resize', requestStepUpdate);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [isAnimatedDesktop, lines.length]);

  return (
    <section
      aria-labelledby="understand-title"
      className={styles.section}
      data-animated={isAnimatedDesktop ? 'true' : 'false'}
      data-testid="narrative-section"
    >
      <div
        className={isAnimatedDesktop ? styles.trackAnimated : styles.trackStatic}
        data-testid="narrative-track"
        ref={trackRef}
        style={
          isAnimatedDesktop
            ? ({ '--narrative-step-count': Math.max(lines.length, DESKTOP_STEP_COUNT) } as CSSProperties)
            : undefined
        }
      >
        <div
          className={isAnimatedDesktop ? styles.stickyViewport : styles.staticViewport}
          data-testid="narrative-viewport"
        >
          <div className={`homeContainer ${styles.inner}`}>
            <div className={isAnimatedDesktop ? styles.stage : styles.stack}>
              {lines.map((line, index) => {
                const visualState = getNarrativeLineVisualState(index, activeIndex);
                const variantClassName =
                  line.variant === 'intro'
                    ? styles.intro
                    : line.variant === 'serif-muted'
                      ? styles.statementSerifMuted
                      : styles.statement;

                return (
                  <p
                    className={`${styles.line} ${variantClassName} ${
                      index === activeIndex ? styles.lineActive : styles.lineInactive
                    } ${isAnimatedDesktop ? getNarrativeLineVisualStateClass(visualState, styles) : ''}`}
                    data-active={index === activeIndex ? 'true' : 'false'}
                    data-line-index={index}
                    data-visual-state={isAnimatedDesktop ? visualState : 'static'}
                    id={index === 0 ? 'understand-title' : undefined}
                    key={line.key}
                  >
                    {line.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
