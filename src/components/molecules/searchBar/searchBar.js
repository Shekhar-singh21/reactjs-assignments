import { useDispatch } from "react-redux";
import Button from "../../atoms/buttons/button";
import Input from "../../atoms/inputField/inputField";
import { useState } from "react";
import { addTask } from "../../store/slices/taskSlices";
import style from './searchBar.module.css'

export default function SearchBar() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function getInput(e) {
    setInput(e.target.value);
    console.log(input);
  }

  function addTasks() {
    if (input.trim() !== '') {
      const newTask = {
        name: input,
        id: new Date().getTime().toString(),
        status: 'pending',
      };
      dispatch(addTask(newTask));
      setInput('');
    }
  }

  return (
    <>
      <div className={style.searchbar}>
        <Input value={input} performTask={getInput} />
        <Button text="Add Task" performTask={addTasks} />
      </div>
    </>
  );
}
