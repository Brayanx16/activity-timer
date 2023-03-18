import { StopwatchR } from "../components/Stopwatch";
import { ListR } from "../components/List";
import { FormR } from "../components/Form";
import style from "./App.module.scss";
import { ITask } from "../types/task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectedTask: ITask) => {
    setSelected(selectedTask);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  };

  const endTask = () => {
    if (selected) {
      setSelected(undefined);
      setTasks((oldTasks) =>
        oldTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <FormR setTasks={setTasks} />
      <ListR tasks={tasks} selectTask={selectTask} />
      <StopwatchR selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;
