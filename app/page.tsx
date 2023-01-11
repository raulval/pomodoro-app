"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Switches from "../components/Switches";
import Timer from "../components/Timer";
import { GlobalStyle } from "../styles/global";
import { Container, Title } from "../styles/home";
import Theme from "../styles/theme";

export default function Home() {
  const [selectedSwitch, setSelectedSwitch] = useState("pomodoro");
  const [selectedTime, setSelectedTime] = useState(25 * 60);

  useEffect(() => {
    if (selectedSwitch === "pomodoro") {
      setSelectedTime(25 * 60);
    } else if (selectedSwitch === "short break") {
      setSelectedTime(5 * 60);
    } else if (selectedSwitch === "long break") {
      setSelectedTime(15 * 60);
    }
  }, [selectedSwitch]);

  return (
    <>
      <title>Pomodoro App</title>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Container>
          <Title>pomodoro</Title>
          <Switches onClick={(props) => setSelectedSwitch(props)} />
          <Timer selectedTime={selectedTime} />
        </Container>
      </ThemeProvider>
    </>
  );
}
