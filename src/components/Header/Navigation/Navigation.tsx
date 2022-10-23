import { Icon } from "../../Icon";
import { IconButton } from "../../IconButton/IconButton";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.Logo}>
        <Icon name="logo" />
      </div>
      <IconButton icon="file" />
      <IconButton icon="open" />
      <IconButton icon="save" />
    </div>
  );
};
