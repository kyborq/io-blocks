import { TIcon } from "../../../icons";
import { Icon } from "../../Icon";

import styles from "./Button.module.css";

type Props = {
  icon: TIcon;
  label: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ icon, label, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      <Icon name={icon} />
      <span className={styles.Label}>{label}</span>
    </button>
  );
};
