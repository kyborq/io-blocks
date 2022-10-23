import { IconButton } from "../../IconButton/IconButton";

import styles from "./Actions.module.css";

export const Actions = () => {
  return (
    <div className={styles.Actions}>
      <IconButton icon="share" />
      <IconButton icon="settings" />
    </div>
  );
};
