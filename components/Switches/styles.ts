import styled, { DefaultTheme } from "styled-components";

interface SwitchesStyleProps {
  active: boolean;
  theme: DefaultTheme;
}

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
  /* width: 23.5rem; */
  height: 4.5rem;

  background-color: ${(props) => props.theme.colors.secondary.main};
  border-radius: 32px;
  gap: 0.2rem;
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
    props.active ? props.theme.themes.color1 : "none"};
  font-weight: 600;
`;
