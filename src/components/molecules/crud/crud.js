import { useState } from "react";
import Button from "../../atoms/buttons/button";
import Input from "../../atoms/inputField/input";
import './crud.css';

export default function Crud() {
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);

  function getData(e) {
    setData(e.target.value);
  }

  function addTask() {
    if (data.trim() !== "") {
      setTasks((previousData) => [...previousData, data]);
      setData("");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const deleteBtnStyle = {
    backgroundColor: 'red'
  };

  return (
    <div className="wrapper">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="lists">{task} 
              <Button text="Delete" style={deleteBtnStyle} performTask={() => deleteTask(index)} />
            </div>
          </li>
        ))}
      </ul>
      <div className="set-tasks">
        <Input value={data} performTask={getData} pressedByKey={handleKeyPress} />
        <Button text="Add" performTask={addTask} />
      </div>
    </div>
  );
}
