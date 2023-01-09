"use client";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Switches from "../components/Switches";
import { GlobalStyle } from "../styles/global";
import { Container, Title } from "../styles/home";
import Theme from "../styles/theme";

export default function Home() {
  const [selectedSwitch, setSelectedSwitch] = useState("pomodoro");

  return (
    <>
      <title>Pomodoro App</title>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Container>
          <Title>pomodoro</Title>
          <Switches onClick={(props) => setSelectedSwitch(props)} />
        </Container>
      </ThemeProvider>
    </>
  );
}
