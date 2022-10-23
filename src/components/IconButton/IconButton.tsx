import React from "react";
import { TIcon } from "../../icons";
import { Icon } from "../Icon";

import styles from "./IconButton.module.css";

type Props = {
  icon: TIcon;
  onClick?: () => void;
};

export const IconButton: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <button className={styles.IconButton} onClick={onClick}>
      <Icon name={icon} />
    </button>
  );
};
