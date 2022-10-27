import { IconButton } from "../IconButton/IconButton";

import styles from "./Modal.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <div className={styles.Header}>
          <h3 className={styles.Title}>{title}</h3>
          <IconButton icon="close" />
        </div>

        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  );
};
