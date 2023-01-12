import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setLongBreakTimer,
  setPomodoroTimer,
  setShortBreakTimer,
} from "../../redux/reducers/timerValues";

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
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement>(null);
  const presets = ["default", "dev", "lazy"];
  const [selectedPreset, setSelectedPreset] = useState(presets[0]);
  const [pomodoroTime, setPomodoroTime] = useState<number>(25);
  const [shortBreakTime, setShortBreakTime] = useState<number>(5);
  const [longBreakTime, setLongBreakTime] = useState<number>(15);

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

    if (selectedPreset === "default") {
      setPomodoroTime(25);
      setShortBreakTime(5);
      setLongBreakTime(15);
    } else if (selectedPreset === "dev") {
      setPomodoroTime(60);
      setShortBreakTime(5);
      setLongBreakTime(20);
    } else if (selectedPreset === "lazy") {
      setPomodoroTime(15);
      setShortBreakTime(5);
      setLongBreakTime(30);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal, selectedPreset]);

  const handlePreset = (preset: string) => {
    setSelectedPreset(preset);
  };

  const handleApply = async () => {
    if (
      Number.isNaN(pomodoroTime) ||
      pomodoroTime === 0 ||
      Number.isNaN(shortBreakTime) ||
      shortBreakTime === 0 ||
      Number.isNaN(longBreakTime) ||
      longBreakTime === 0
    ) {
      return;
    } else {
      dispatch(setPomodoroTimer(pomodoroTime));
      dispatch(setShortBreakTimer(shortBreakTime));
      dispatch(setLongBreakTimer(longBreakTime));
      closeModal();
    }
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
                <ModalTimeInput
                  type="number"
                  pattern="[0-9]{1,3}"
                  value={pomodoroTime}
                  onChange={(e) => setPomodoroTime(e.target.valueAsNumber)}
                  required
                />
              </ModalTimeInputs>
              <ModalTimeInputs>
                <ModalTimeInputLabel>short break</ModalTimeInputLabel>
                <ModalTimeInput
                  type="number"
                  pattern="[0-9]{1,3}"
                  value={shortBreakTime}
                  onChange={(e) => setShortBreakTime(e.target.valueAsNumber)}
                  required
                />
              </ModalTimeInputs>
              <ModalTimeInputs>
                <ModalTimeInputLabel>long break</ModalTimeInputLabel>
                <ModalTimeInput
                  type="number"
                  pattern="[0-9]{1,3}"
                  value={longBreakTime}
                  onChange={(e) => setLongBreakTime(e.target.valueAsNumber)}
                  required
                />
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
