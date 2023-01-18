import styled, { DefaultTheme } from "styled-components";

interface TimerStylesProps {
  timer: number;
  selectedTime: number;
  theme: DefaultTheme;
  color: string;
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 25.62rem;
  max-width: 25.62rem;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: rgb(39 44 90) -50px -50px 100px, rgb(18 21 48) 50px 50px 100px;
  border-radius: 50%;

  @media screen and (max-width: 375px) {
    max-width: 23rem;
    max-height: 23rem;
  }
`;

export const Wrapper2 = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  top: 5%;
  left: 5%;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secondary.main};

  @media screen and (max-width: 375px) {
    max-width: 23rem;
    max-height: 23rem;
  }
`;

export const CountdownTimer = styled.div`
  position: relative;
  width: 21.375rem;
  height: 21.375rem;

  /* @media screen and (max-width: 375px) {
    max-width: 18rem;
    max-height: 18rem;
  } */
`;

export const Svg = styled.svg`
  width: 21.375rem;
  height: 21.375rem;
  transform: scaleX(-1);

  /* @media screen and (max-width: 375px) {
    max-width: 18rem;
    max-height: 18rem;
  } */
`;

export const Path1 = styled.path`
  fill: none;
  stroke: ${(props) => props.theme.colors.secondary.main};
  stroke-width: 13.5px;
`;

export const Path2 = styled.path`
  fill: none;
  stroke: ${(props) =>
    props.color === "color1"
      ? props.theme.themes.color1
      : props.color === "color2"
      ? props.theme.themes.color2
      : props.theme.themes.color3};
  stroke-linecap: round;
  stroke-width: 13.5;
  stroke-dasharray: 1032;
  stroke-dashoffset: ${(props: TimerStylesProps) =>
    1032 - (props.timer / props.selectedTime) * 1032};
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

export const TimerRing = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  color: ${(props) =>
    props.color === "color1"
      ? props.theme.themes.color1
      : props.color === "color2"
      ? props.theme.themes.color2
      : props.theme.themes.color3};
`;

export const TimerDiv = styled.div`
  overflow: hidden;
`;

export const TimerText = styled.p`
  color: ${(props) => props.theme.colors.primary.text};
  font-size: 5.5rem;
  font-weight: 600;
`;

export const TimerButtons = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.375rem;
  justify-content: center;
  align-items: center;
`;

export const TimerStartButton = styled.button`
  color: ${(props) => props.theme.colors.primary.text};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 13px;
  text-transform: uppercase;
  padding-left: 15px;
  cursor: pointer;
  background: none;
  border: none;
  transition: color 0.2s ease 0s;

  &:hover {
    color: ${(props) =>
      props.color === "color1"
        ? props.theme.themes.color1
        : props.color === "color2"
        ? props.theme.themes.color2
        : props.theme.themes.color3};
  }
`;

export const TimerResetButton = styled.button`
  color: ${(props) => props.theme.colors.primary.text};
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-top: 0.5rem;
  padding-left: 5px;
  cursor: pointer;
  background: none;
  text-align: center;
  border: none;
  font-size: 0.6rem;
  transition: color 0.2s ease 0s;

  &:hover {
    color: ${(props) =>
      props.color === "color1"
        ? props.theme.themes.color1
        : props.color === "color2"
        ? props.theme.themes.color2
        : props.theme.themes.color3};
  }
`;
