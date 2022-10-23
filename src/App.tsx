import { Header } from "./components/Header/Header";
import { Editor } from "./components/Editor/Editor";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Editor />
    </div>
  );
}

export default App;
