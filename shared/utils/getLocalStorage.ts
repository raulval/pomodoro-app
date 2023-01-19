import { useSelector } from "react-redux";
import { selectColors } from "../../redux/reducers/colors";
import { selectTimerValues } from "../../redux/reducers/timerValues";

export const getLocalStorage = (key: string) => {
  const value =
    typeof window !== "undefined"
      ? localStorage.getItem(key)
      : JSON.stringify({
          color: useSelector(selectColors).color,
          pomodoroTimer: useSelector(selectTimerValues).pomodoro,
          shortBreakTimer: useSelector(selectTimerValues).shortBreak,
          longBreakTimer: useSelector(selectTimerValues).longBreak,
        });

  if (value) {
    return JSON.parse(value);
  }
  return null;
};
