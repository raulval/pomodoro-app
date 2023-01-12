"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Settings from "../components/Settings";
import Switches from "../components/Switches";
import Timer from "../components/Timer";
import { selectTimerValues } from "../redux/reducers/timerValues";
import { GlobalStyle } from "../styles/global";
import { Container, Title } from "../styles/home";
import Theme from "../styles/theme";

export default function Home() {
  const [selectedSwitch, setSelectedSwitch] = useState("pomodoro");
  const [selectedTime, setSelectedTime] = useState<number>(25 * 60);
  const { pomodoro, shortBreak, longBreak } = useSelector(selectTimerValues);

  useEffect(() => {
    if (selectedSwitch === "pomodoro") {
      setSelectedTime(pomodoro * 60);
    } else if (selectedSwitch === "short break") {
      setSelectedTime(shortBreak * 60);
    } else if (selectedSwitch === "long break") {
      setSelectedTime(longBreak * 60);
    }
  }, [selectedSwitch, pomodoro, shortBreak, longBreak]);

  return (
    <>
      <title>Pomodoro App</title>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Container>
          <Title>pomodoro</Title>
          <Switches onClick={(props) => setSelectedSwitch(props)} />
          <Timer selectedTime={selectedTime} />
          <Settings />
        </Container>
      </ThemeProvider>
    </>
  );
}
