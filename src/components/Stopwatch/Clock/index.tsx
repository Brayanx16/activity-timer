import style from "./Clock.module.scss";

interface IProps {
  time: number | undefined;
}

export const ClockR = ({ time = 0 }: IProps) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTens, minutesUnit] = String(minutes).padStart(2, "0");
  const [secondesTens, secondesUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutesTens}</span>
      <span className={style.relogioNumero}>{minutesUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondesTens}</span>
      <span className={style.relogioNumero}>{secondesUnit}</span>
    </>
  );
};
