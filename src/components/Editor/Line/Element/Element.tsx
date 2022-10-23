import React from "react";
import { TIcon } from "../../../../icons";
import { Icon } from "../../../Icon";

import styles from "./Element.module.css";

type Props = {
  icon: TIcon;
  label: string;
};

export const Element: React.FC<Props> = ({ icon, label }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Element}>
        <Icon name={icon} />
        <span className={styles.Label}>{label}</span>
      </div>
    </div>
  );
};
