import { useState } from "react";

import { Line } from "./Line/Line";

import styles from "./Editor.module.css";
import { Modal } from "../Modal/Modal";
import { Button } from "./Button/Button";

export const Editor = () => {
  const [modalAdd, setModalAdd] = useState(false);

  const showModalAdd = () => setModalAdd(true);

  return (
    <div className={styles.Editor}>
      <Line
        icon="settings"
        label="Setup"
        canHaveChildren
        onAddEvent={showModalAdd}
      />
      <Line
        icon="settings"
        label="Always"
        canHaveChildren
        onAddEvent={showModalAdd}
      />

      {modalAdd && (
        <Modal title="New Command">
          <h4>System</h4>
          <div className={styles.Events}>
            <Button icon="settings" label="Wait" />
            <Button icon="settings" label="Repeat" />
            <Button icon="settings" label="Set" />
            <Button icon="settings" label="Change" />
            <Button icon="settings" label="Clear" />
            <Button icon="settings" label="Setup" />
            <Button icon="settings" label="Loop" />
          </div>

          <h4>Sensors</h4>
          <div className={styles.Events}>
            <Button icon="settings" label="Read" />
            <Button icon="settings" label="Write" />
          </div>
        </Modal>
      )}
    </div>
  );
};
