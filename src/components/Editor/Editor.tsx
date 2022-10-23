import { Button } from "./Button/Button";
import styles from "./Editor.module.css";
import { Line } from "./Line/Line";

export const Editor = () => {
  return (
    <div className={styles.Editor}>
      <Button icon="plus" label="Переменная" />
      <Line
        icon="settings"
        label="При старте"
        comment="Выполнение кода один раз"
      />
      <Line
        icon="settings"
        label="Всегда"
        comment="Выполнение кода бесконечно"
      />
      <Button icon="plus" label="Функция" />
    </div>
  );
};
