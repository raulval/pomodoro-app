import { useState } from "react";
import { Container, SettingsIcon } from "./styles";

const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <SettingsIcon size={40} onClick={() => setShowModal(true)} />
    </Container>
  );
};

export default Settings;
