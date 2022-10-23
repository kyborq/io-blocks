import { Line } from "./Line/Line";

import styles from "./Editor.module.css";

export const Editor = () => {
  return (
    <div className={styles.Editor}>
      <Line icon="settings" label="Setup" canHaveChildren>
        <Line icon="settings" label="Always" canHaveChildren>
          <Line icon="settings" label="Always" />
          <Line icon="settings" label="Always" canHaveChildren />
        </Line>
      </Line>
      <Line icon="settings" label="Always" canHaveChildren />
    </div>
  );
};
