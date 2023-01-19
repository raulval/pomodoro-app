import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectColors } from "../../redux/reducers/colors";
import { switches } from "../../shared/data";
import { userSettings } from "../../shared/interfaces";
import { getLocalStorage } from "../../shared/utils/getLocalStorage";
import { Container, PomodoroSwitch, Wrapper } from "./styles";

interface SwitchesProps {
  onClick: (switchName: string) => void;
}

export default function Switches({ onClick }: SwitchesProps) {
  const [selectedButton, setSelectedButton] = useState(switches[0]);
  const { color } = useSelector(selectColors);
  const [userSettings, setUserSettings] = useState<userSettings>();

  useEffect(() => {
    setUserSettings(getLocalStorage("settings"));
  }, [color]);

  const handleClick = (name: string) => {
    setSelectedButton(name);
    onClick(name);
  };
  return (
    <Container>
      <Wrapper>
        {switches.map((switchItem) => {
          const isActive = selectedButton === switchItem ? true : false;
          return (
            <PomodoroSwitch
              key={switchItem}
              onClick={() => handleClick(switchItem)}
              active={isActive}
              color={userSettings ? userSettings.color : color}
            >
              {switchItem}
            </PomodoroSwitch>
          );
        })}
      </Wrapper>
    </Container>
  );
}
