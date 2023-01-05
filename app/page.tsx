"use client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { Container, Title } from "../styles/home";
import Theme from "../styles/theme";

export default function Home() {
  return (
    <>
      <title>Pomodoro App</title>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />

        <Container>
          <Title>pomodoro</Title>
        </Container>
      </ThemeProvider>
    </>
  );
}
