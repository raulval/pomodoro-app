import { useEffect, useRef, useState } from "react";
import {
  CloseIcon,
  Modal,
  ModalApply,
  ModalApplyButton,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalPresets,
  ModalPresetsButton,
  ModalPresetsButtons,
  ModalSeparator,
  ModalText,
  ModalTime,
  ModalTimeInput,
  ModalTimeInputLabel,
  ModalTimeInputs,
  ModalTimeInputsWrapper,
  ModalTitle,
} from "./SettingsModal.styles";

interface SettingsModalProps {
  closeModal: () => void;
}

const SettingsModal = ({ closeModal }: SettingsModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const presets = ["default", "dev", "lazy"];
  const [selectedPreset, setSelectedPreset] = useState(presets[0]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  const handlePreset = (preset: string) => {
    setSelectedPreset(preset);
  };

  const handleApply = () => {
    closeModal();
  };

  return (
    <Modal>
      <ModalContent ref={modalRef}>
        <ModalHeader>
          <ModalTitle>Settings</ModalTitle>
          <CloseIcon size={30} onClick={closeModal} />
        </ModalHeader>
        <ModalSeparator></ModalSeparator>
        <ModalBody>
          <ModalTime>
            <ModalText>Time (Minutes)</ModalText>
            <ModalTimeInputsWrapper>
              <ModalTimeInputs>
                <ModalTimeInputLabel>pomodoro</ModalTimeInputLabel>
                <ModalTimeInput type="number" />
              </ModalTimeInputs>
              <ModalTimeInputs>
                <ModalTimeInputLabel>short break</ModalTimeInputLabel>
                <ModalTimeInput type="number" />
              </ModalTimeInputs>
              <ModalTimeInputs>
                <ModalTimeInputLabel>long break</ModalTimeInputLabel>
                <ModalTimeInput type="number" />
              </ModalTimeInputs>
            </ModalTimeInputsWrapper>
          </ModalTime>

          <ModalSeparator></ModalSeparator>

          <ModalPresets>
            <ModalText>Presets</ModalText>
            <ModalPresetsButtons>
              {presets.map((presetItem) => {
                const isActive = selectedPreset === presetItem ? true : false;
                return (
                  <ModalPresetsButton
                    key={presetItem}
                    onClick={() => handlePreset(presetItem)}
                    active={isActive}
                  >
                    {presetItem}
                  </ModalPresetsButton>
                );
              })}
            </ModalPresetsButtons>
          </ModalPresets>
          <ModalApply>
            <ModalApplyButton onClick={handleApply}>Apply</ModalApplyButton>
          </ModalApply>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
