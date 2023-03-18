import { ITask } from "../../types/task";
import style from "./Form.module.scss";
import { ButtonR } from "../Button";
import { v4 as uuid } from "uuid";
import { useState } from "react";

interface IProps {
  setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>;
}

export const FormR = ({ setTasks }: IProps) => {
  const [task, setTask] = useState({
    name: "",
    time: "00:00",
  });

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { ...task, selected: false, completed: false, id: uuid() },
    ]);
    setTask({
      name: "",
      time: "00:00",
    });
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task"> Add new study </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task.name}
          onChange={(event) => setTask({ ...task, name: event.target.value })}
          placeholder="What do you want to study ?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          value={task.time}
          onChange={(event) => setTask({ ...task, time: event.target.value })}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <ButtonR type="submit">Create</ButtonR>
    </form>
  );
};
