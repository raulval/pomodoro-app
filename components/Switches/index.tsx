import { useState } from "react";
import { Container, PomodoroSwitch, Wrapper } from "./styles";

interface SwitchesProps {
  onClick: (switchName: string) => void;
}

export default function Switches({ onClick }: SwitchesProps) {
  const switches = ["pomodoro", "short break", "long break"];

  const [selectedButton, setSelectedButton] = useState(switches[0]);
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
            >
              {switchItem}
            </PomodoroSwitch>
          );
        })}
      </Wrapper>
    </Container>
  );
}
