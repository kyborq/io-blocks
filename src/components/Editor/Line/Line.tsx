import { TIcon } from "../../../icons";
import { Button } from "../Button/Button";
import { Element } from "./Element/Element";
import { IconButton } from "../../IconButton/IconButton";

import styles from "./Line.module.css";
import { classnames } from "../../../utils/classnames";

type Props = {
  icon: TIcon;
  label: string;
  children?: React.ReactNode;
  canHaveChildren?: boolean;
  selected?: boolean;
};

export const Line: React.FC<Props> = ({
  icon,
  label,
  children,
  canHaveChildren,
  selected,
}) => {
  return (
    <div className={classnames(styles.Container, selected && styles.Selected)}>
      <div className={styles.Line}>
        <Element icon={icon} label={label} />
        <div className={styles.Actions}>
          <IconButton icon="trash" />
        </div>
      </div>
      {canHaveChildren && (
        <div className={styles.Children}>
          {children}
          <Button icon="plus" label="Command" />
        </div>
      )}
    </div>
  );
};
