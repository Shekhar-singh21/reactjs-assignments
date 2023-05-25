import { useSelector, useDispatch } from "react-redux";
import { toggleTask } from "../../store/slices/taskSlices";
import Button from "../../atoms/buttons/button";
import style from './todoList.module.css'

export default function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div className={style.todoList}>
      <ul className={style.list}>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <Button
              performTask={() => handleToggleTask(task.id)}
              text={task.status === "pending" ? "completed" : "pending"}
              className={task.status === "pending" ? "pending" : "completed"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
