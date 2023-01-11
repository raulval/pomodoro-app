import { useState } from "react";
import SettingsModal from "./SettingsModal";
import { Container, SettingsIcon } from "./styles";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <SettingsIcon size={40} onClick={() => setShowModal(true)} />
      {showModal && <SettingsModal closeModal={() => setShowModal(false)} />}
    </Container>
  );
};

export default Settings;
