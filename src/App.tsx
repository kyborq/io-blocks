import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import { Editor } from "./components/Editor/Editor";
import { IconButton } from "./components/IconButton/IconButton";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <IconButton icon="file" />
      <Editor />
    </div>
  );
}

export default App;
