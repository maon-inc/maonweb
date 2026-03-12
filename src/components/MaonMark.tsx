import maonMarkUrl from '../assets/maon-mark.svg';
import styles from './MaonMark.module.css';

type MaonMarkProps = {
  className?: string;
};

export function MaonMark({ className }: MaonMarkProps) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={className ? `${styles.mark} ${className}` : styles.mark}
      src={maonMarkUrl}
    />
  );
}
