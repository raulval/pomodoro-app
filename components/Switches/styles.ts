import styled, { DefaultTheme } from "styled-components";

interface SwitchesStyleProps {
  active: boolean;
  theme: DefaultTheme;
  color: string;
}

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
  height: 4.5rem;

  background-color: ${(props) => props.theme.colors.secondary.main};
  border-radius: 32px;
  gap: 0.2rem;

  @media screen and (max-width: 360px) {
    width: 19rem;
  }
`;

export const PomodoroSwitch = styled.button`
  cursor: pointer;
  width: 7.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 32px;
  color: ${(props: SwitchesStyleProps) =>
    props.active
      ? props.theme.colors.terciary.text
      : props.theme.colors.secondary.text};
  background: ${(props: SwitchesStyleProps) =>
    props.active && props.color === "color1"
      ? props.theme.themes.color1
      : props.active && props.color === "color2"
      ? props.theme.themes.color2
      : props.active && props.color === "color3"
      ? props.theme.themes.color3
      : "none"};
  font-weight: 600;
  transition: background 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
`;
