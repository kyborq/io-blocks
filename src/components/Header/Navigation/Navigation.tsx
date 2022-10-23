import { Icon } from "../../Icon";
import { IconButton } from "../../IconButton/IconButton";

import styles from "./Navigation.module.css";

type Props = {
  onNew?: () => void;
  onOpen?: () => void;
  onSave?: () => void;
};

export const Navigation: React.FC<Props> = ({ onNew, onOpen, onSave }) => {
  return (
    <div className={styles.Navigation}>
      <div className={styles.Logo}>
        <Icon name="logo" />
      </div>

      <IconButton icon="file" onClick={onNew} />
      <IconButton icon="open" onClick={onOpen} />
      <IconButton icon="save" onClick={onSave} />
    </div>
  );
};
