import styles from "./Title.module.css";

type Props = {
  title?: string;
  onChangeTitle?: () => void;
};

export const Title: React.FC<Props> = ({ title, onChangeTitle }) => {
  return (
    <div className={styles.Title}>
      <h2 className={styles.ProjectName} onClick={onChangeTitle}>
        {title || "untitled.iob"}
      </h2>
    </div>
  );
};
