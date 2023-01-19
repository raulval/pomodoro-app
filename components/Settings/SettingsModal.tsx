import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColors, setColor } from "../../redux/reducers/colors";
import {
  setLongBreakTimer,
  setPomodoroTimer,
  setShortBreakTimer,
} from "../../redux/reducers/timerValues";
import { colors, presets } from "../../shared/data";
import { getLocalStorage } from "../../shared/utils/getLocalStorage";
import Theme from "../../styles/theme";

import { userSettings } from "../../shared/interfaces";
import {
  CloseIcon,
  Modal,
  ModalApply,
  ModalApplyButton,
  ModalBody,
  ModalColorButton,
  ModalColors,
  ModalColorsButtons,
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
  const { color } = useSelector(selectColors);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedPreset, setSelectedPreset] = useState<string>();
  const [userSettings, setUserSettings] = useState<userSettings>();
  const [selectedColor, setSelectedColor] = useState(
    userSettings ? userSettings.color : colors[0]
  );
  const [pomodoroTime, setPomodoroTime] = useState<number>(
    userSettings ? userSettings.pomodoroTimer : 25
  );
  const [shortBreakTime, setShortBreakTime] = useState<number>(
    userSettings ? userSettings.shortBreakTimer : 5
  );
  const [longBreakTime, setLongBreakTime] = useState<number>(
    userSettings ? userSettings.longBreakTimer : 15
  );

  useEffect(() => {
    setUserSettings(getLocalStorage("settings"));
  }, [color]);

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

  const handleApply = async () => {
    if (
      Number.isNaN(pomodoroTime) ||
      pomodoroTime <= 0 ||
      Number.isNaN(shortBreakTime) ||
      shortBreakTime <= 0 ||
      Number.isNaN(longBreakTime) ||
      longBreakTime <= 0
    ) {
      return;
    } else {
      dispatch(setPomodoroTimer(pomodoroTime));
      dispatch(setShortBreakTimer(shortBreakTime));
      dispatch(setLongBreakTimer(longBreakTime));
      dispatch(setColor(selectedColor));
      localStorage.setItem(
        "settings",
        JSON.stringify({
          pomodoroTimer: pomodoroTime,
          shortBreakTimer: shortBreakTime,
          longBreakTimer: longBreakTime,
          color: selectedColor,
        })
      );
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
                    onClick={() => setSelectedPreset(presetItem)}
                    active={isActive}
                  >
                    {presetItem}
                  </ModalPresetsButton>
                );
              })}
            </ModalPresetsButtons>
          </ModalPresets>

          <ModalSeparator></ModalSeparator>

          <ModalColors>
            <ModalText>Colors</ModalText>
            <ModalColorsButtons>
              {colors.map((color) => {
                const isActive = selectedColor === color ? true : false;
                return (
                  <ModalColorButton
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    active={isActive}
                    style={{
                      background: `${
                        color === "color1"
                          ? Theme.themes.color1
                          : color === "color2"
                          ? Theme.themes.color2
                          : Theme.themes.color3
                      }`,
                    }}
                  ></ModalColorButton>
                );
              })}
            </ModalColorsButtons>
          </ModalColors>
          <ModalApply>
            <ModalApplyButton
              onClick={handleApply}
              color={userSettings ? userSettings.color : color}
            >
              Apply
            </ModalApplyButton>
          </ModalApply>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
