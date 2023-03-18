import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface IProps extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export const ItemR = ({
  name,
  time,
  selected,
  completed,
  id,
  selectTask,
}: IProps) => {
  return (
    <li
      className={`${style.item} 
      ${selected ? style.itemSelecionado : ""} 
      ${completed ? style.itemCompletado : ""}`}
      onClick={() =>
        !completed &&
        selectTask({
          name,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} aria-label="Completed task"></span>
      )}
    </li>
  );
};
