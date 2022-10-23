import { Line } from "./Line/Line";

import styles from "./Editor.module.css";

export const Editor = () => {
  return (
    <div className={styles.Editor}>
      <Line icon="settings" label="Setup" canHaveChildren>
        <Line icon="settings" label="Check X > 20" canHaveChildren>
          <Line icon="settings" label="Call GoForward" />
          <Line icon="settings" label="Wait 2 seconds" />
        </Line>
      </Line>
      <Line icon="settings" label="Always" canHaveChildren />
    </div>
  );
};
