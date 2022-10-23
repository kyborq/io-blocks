import { IconButton } from "../../IconButton/IconButton";

import styles from "./Actions.module.css";

type Props = {
  onShare?: () => void;
  onSettings?: () => void;
};

export const Actions: React.FC<Props> = ({ onSettings, onShare }) => {
  return (
    <div className={styles.Actions}>
      <IconButton icon="share" onClick={onShare} />
      <IconButton icon="settings" onClick={onSettings} />
    </div>
  );
};
