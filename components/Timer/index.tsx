import { useEffect, useState } from "react";
import {
  Container,
  CountdownTimer,
  Path1,
  Path2,
  Svg,
  TimerButtons,
  TimerDiv,
  TimerResetButton,
  TimerRing,
  TimerStartButton,
  TimerText,
  Wrapper,
  Wrapper2,
} from "./styles";

interface TimerProps {
  selectedTime: number;
}

export default function Timer({ selectedTime }: TimerProps) {
  const [timer, setTimer] = useState(selectedTime); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimer(selectedTime);
  }, [selectedTime]);

  const handleStart = () => {
    setIsRunning(true);
    setIntervalId(
      setInterval(() => {
        setTimer((t) => {
          if (t === 0) {
            clearInterval(intervalId!);
            setIsRunning(false);
            return t;
          } else {
            return t - 1;
          }
        });
      }, 1000)
    );
  };

  const handlePause = () => {
    clearInterval(intervalId!);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalId!);
    setIntervalId(null);
    setIsRunning(false);
    setTimer(selectedTime);
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <Container>
      <Wrapper>
        <Wrapper2>
          <CountdownTimer>
            <Svg xmlns="http://www.w3.org/2000/svg">
              <Path1
                d="m 171,6.75
          a 164.25,164.25 0 1,0 0,328.5
          a 164.25,164.25 0 1,0 0,-328.5"
              ></Path1>
              <Path2
                d="m 171,6.75
          a 164.25,164.25 0 1,0 0,328.5
          a 164.25,164.25 0 1,0 0,-328.5"
                timer={timer}
                selectedTime={selectedTime}
              ></Path2>
            </Svg>
            <TimerRing>
              <TimerDiv>
                <TimerText>
                  {minutes}:{formattedSeconds}
                </TimerText>
                <TimerButtons>
                  {isRunning ? (
                    <>
                      <TimerStartButton onClick={handlePause}>
                        Pause
                      </TimerStartButton>
                      <TimerResetButton onClick={handleReset}>
                        Reset
                      </TimerResetButton>
                    </>
                  ) : (
                    <>
                      {timer === 0 ? (
                        <TimerStartButton onClick={handleReset}>
                          Reset
                        </TimerStartButton>
                      ) : (
                        <>
                          <TimerStartButton onClick={handleStart}>
                            Start
                          </TimerStartButton>
                          {timer < selectedTime && (
                            <TimerResetButton onClick={handleReset}>
                              Reset
                            </TimerResetButton>
                          )}
                        </>
                      )}
                    </>
                  )}
                </TimerButtons>
              </TimerDiv>
            </TimerRing>
          </CountdownTimer>
        </Wrapper2>
      </Wrapper>
    </Container>
  );
}