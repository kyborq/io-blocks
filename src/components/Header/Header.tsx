import { Actions } from "./Actions/Actions";
import { Navigation } from "./Navigation/Navigation";
import { Title } from "./Title/Title";

import styles from "./Header.module.css";

export const Header = () => {
  const handleNew = () => {};
  const handleSave = () => {};
  const handleOpen = () => {};

  const handleChangeTitle = () => {};

  const handleShare = () => {};
  const handleSettings = () => {};

  return (
    <header className={styles.Header}>
      <Navigation onNew={handleNew} onOpen={handleOpen} onSave={handleSave} />
      <Title onChangeTitle={handleChangeTitle} />
      <Actions onSettings={handleSettings} onShare={handleShare} />
    </header>
  );
};
