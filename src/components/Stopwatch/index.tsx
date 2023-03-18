import { timeToSecond } from "../common/utils/time";
import style from "./Stopwatch.module.scss";
import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import { ButtonR } from "../Button";
import { ClockR } from "./Clock";

interface IProps {
  selected: ITask | undefined;
  endTask: () => void;
}

export const StopwatchR = ({ selected, endTask }: IProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSecond(selected.time));
  }, [selected]);

  const regressive = (count: number = 0) => {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      endTask();
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Choose a card and start the TIMER </p>
      <div className={style.relogioWrapper}>
        <ClockR time={time} />
      </div>
      <ButtonR onClick={() => regressive(time)}> Start </ButtonR>
    </div>
  );
};
