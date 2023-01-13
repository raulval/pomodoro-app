"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Settings from "../components/Settings";
import Switches from "../components/Switches";
import Timer from "../components/Timer";
import { selectTimerValues } from "../redux/reducers/timerValues";
import { userSettings } from "../shared/interfaces";
import { getLocalStorage } from "../shared/utils/getLocalStorage";
import { GlobalStyle } from "../styles/global";
import { Container, Title } from "../styles/home";
import Theme from "../styles/theme";

export default function Home() {
  const { pomodoro, shortBreak, longBreak } = useSelector(selectTimerValues);
  const [selectedSwitch, setSelectedSwitch] = useState("pomodoro");
  const [selectedTime, setSelectedTime] = useState<number>(pomodoro);
  const userSettings: userSettings = getLocalStorage("settings");

  useEffect(() => {
    if (selectedSwitch === "pomodoro") {
      setSelectedTime(
        userSettings ? userSettings.pomodoroTimer * 60 : pomodoro * 60
      );
    } else if (selectedSwitch === "short break") {
      setSelectedTime(
        userSettings ? userSettings.shortBreakTimer * 60 : shortBreak * 60
      );
    } else if (selectedSwitch === "long break") {
      setSelectedTime(
        userSettings ? userSettings.longBreakTimer * 60 : longBreak * 60
      );
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
