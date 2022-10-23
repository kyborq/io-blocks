import { TIcon } from "../../../icons";
import { Icon } from "../../Icon";

import styles from "./Button.module.css";

type Props = {
  icon: TIcon;
  label: string;
};

export const Button: React.FC<Props> = ({ icon, label }) => {
  return (
    <button className={styles.Button}>
      <Icon name={icon} />
      <span className={styles.Label}>{label}</span>
    </button>
  );
};
