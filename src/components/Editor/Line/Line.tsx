import { TIcon } from "../../../icons";
import { Icon } from "../../Icon";
import { Button } from "../Button/Button";
import styles from "./Line.module.css";

type Props = {
  icon: TIcon;
  label: string;
  comment?: string;
};

export const Line: React.FC<Props> = ({ icon, label, comment }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Line}>
        <div className={styles.Action}>
          <Icon name={icon} />
          <span className={styles.Label}>{label}</span>
        </div>
        {!!comment && <span className={styles.Comment}>{comment}</span>}
      </div>
      <div className={styles.Footer}>
        <Icon name="sub" />
        <div className={styles.FooterActions}>
          <Button icon="plus" label="Добавить" />
        </div>
      </div>
    </div>
  );
};
