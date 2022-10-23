import styles from "./App.module.css";
import { Icon } from "./components/Icon";
import { IconButton } from "./components/IconButton/IconButton";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <div className={styles.Navigation}>
          <div className={styles.Logo}>
            <Icon name="logo" />
          </div>
          <IconButton icon="file" />
          <IconButton icon="open" />
          <IconButton icon="save" />
        </div>
        <div className={styles.Title}>
          <h2 className={styles.ProjectName}>sketch_feb28.iob</h2>
        </div>
        <div className={styles.Actions}>
          <IconButton icon="share" />
          <IconButton icon="settings" />
        </div>
      </header>
    </div>
  );
}

export default App;
