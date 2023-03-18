import { ITask } from "../../types/task";
import style from "./List.module.scss";
import { ItemR } from "./Item";

interface IProps {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

export const ListR = ({ tasks, selectTask }: IProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2> Today Study </h2>
      <ul>
        {tasks.map((task) => (
          <ItemR key={task.id} {...task} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
};
