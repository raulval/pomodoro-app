import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  /* -webkit-box-align: center; */
  /* -webkit-box-pack: center; */
  align-items: center;
  justify-content: center;
  /* border: 2px solid #fff; */
  /* flex: 1; */
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
  max-width: 25.62rem;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: rgb(39 44 90) -50px -50px 100px, rgb(18 21 48) 50px 50px 100px;
  border-radius: 50%;
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
`;

export const CountdownTimer = styled.div`
  position: relative;
  width: 21.375rem;
  height: 21.375rem;
`;

export const Svg = styled.svg`
  width: 21.375rem;
  height: 21.375rem;
  transform: scaleX(-1);
`;

export const Path1 = styled.path`
  fill: none;
  stroke: ${(props) => props.theme.colors.secondary.main};
  stroke-width: 13.5px;
`;

export const Path2 = styled.path`
  fill: none;
  stroke: ${(props) => props.theme.themes.color1};
  stroke-linecap: round;
  stroke-width: 13.5;
  stroke-dasharray: 1050;
  stroke-dashoffset: 0;
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
  color: ${(props) => props.theme.themes.color1};
`;

export const TimerDiv = styled.div`
  /* margin-top: 2.375rem;
  width: 100%; */
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
    color: ${(props) => props.theme.themes.color1};
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
    color: ${(props) => props.theme.themes.color1};
  }
`;
