import styles from "./App.module.css";
import { IconButton } from "./components/buttons/IconButton";
import { Button } from "./components/buttons/Button";
import { Avatar } from "./components/profile/Avatar";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.Container}>
        <div>
          <Button icon="home" label="Главная" active />
          <Button icon="history" label="Недавние" />
          <Button icon="trash" label="Корзина" />
        </div>
      </div>
    </div>
  );
}

export default App;
