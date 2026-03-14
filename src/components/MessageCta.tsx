import { useEffect, useId, useRef, useState } from 'react';

import { QRCodeSVG } from 'qrcode.react';

import styles from './MessageCta.module.css';

const DESKTOP_POINTER_MEDIA_QUERY = '(hover: hover) and (pointer: fine)';

export type MessageCtaProps = {
  href: string;
  label: string;
  className?: string;
};

function shouldShowDesktopQr() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(DESKTOP_POINTER_MEDIA_QUERY).matches
  );
}

export function MessageCta({ href, label, className }: MessageCtaProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const shouldRestoreFocusRef = useRef(false);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isDialogOpen) {
      if (shouldRestoreFocusRef.current) {
        triggerRef.current?.focus();
        shouldRestoreFocusRef.current = false;
      }

      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        shouldRestoreFocusRef.current = true;
        setIsDialogOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDialogOpen]);

  function closeDialog() {
    shouldRestoreFocusRef.current = true;
    setIsDialogOpen(false);
  }

  function handleClick() {
    if (!shouldShowDesktopQr()) {
      return;
    }

    setIsDialogOpen(true);
  }

  return (
    <>
      <a className={className} href={href} onClick={handleClick} ref={triggerRef}>
        {label}
      </a>
      {isDialogOpen ? (
        <div
          className={styles.overlay}
          onClick={closeDialog}
        >
          <div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className={styles.dialog}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close QR code"
              className={styles.closeButton}
              onClick={closeDialog}
              type="button"
            >
              close
            </button>
            <div className={styles.copy}>
              <h2 className={styles.title} id={titleId}>
                Open this on your phone
              </h2>
              <p className={styles.description} id={descriptionId}>
                Scan this QR code if Messages does not open on your computer.
              </p>
            </div>
            <div className={styles.qrFrame}>
              <QRCodeSVG
                bgColor="#fffdfa"
                className={styles.qrCode}
                fgColor="#1b1b1b"
                marginSize={2}
                size={192}
                title="Scan to open Messages"
                value={href}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
