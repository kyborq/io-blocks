import { Actions } from "./Actions/Actions";
import { Navigation } from "./Navigation/Navigation";
import { Title } from "./Title/Title";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Navigation />
      <Title />
      <Actions />
    </header>
  );
};
