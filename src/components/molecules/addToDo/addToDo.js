import Button from "../../atoms/buttons/button";
import Input from "../../atoms/inputField/input";
import './addToDo.css'
import { useState } from "react";

export default function AddToDo(){

    const [task, setTask] = useState('')
    const [list, setList] = useState([])
    const [pending, setPending] = useState(0)

    function showTask(){
        if (task.trim() !== "") {
            setList((previousTodo) => {
                const newTodo = [...previousTodo, { id: Date.now(), text: task, completed: false }];
                setPending(prevPending => prevPending + 1); // Increment pending count
                return newTodo;
            });
            setTask("");
        } else {
            alert("Please enter a task");
        }
    }

    function deleteTask(id) {
        setList((previousTodo) => previousTodo.filter(task => task.id !== id));
        // setPending(prevPending => prevPending - 1); // Decrement pending count
    }

    function completeTask(id) {
        setList((previousTodo) =>
            previousTodo.map(task => {
                if (task.id === id) {
                    return { ...task, completed: true };
                }
                return task;
            })
        );
        setPending(prevPending => prevPending - 1); // Decrement pending count
    }

    const btnStyle = {
        color: "white",
        background: "blue",
        padding: "0.5rem 1.5rem",
        fontSize: "1rem",
        fontWeight: "700",
        borderRadius: "8px"
    }

    const completeBtn = {
        padding: "0.3rem",
        fontSize: "0.7rem",
        borderRadius: "6px",
        backgroundColor: "blue",
        border: "none",
        boxShadow: "1px 2px 2px rgba(0,0,0,0.5)"
    }

    const deleteBtn = {
        background: "red",
        borderRadius: "4px",
        fontSize: "0.7rem",
        padding: "0.3rem",
        border: "none",
        color: "white",
        margin: "0.3rem"
    }

    const inputStyle = {
        padding: "0.5rem",
        borderRadius: "0.5rem",
        textAlign: "center"
    }

    return (
        <>
            <div className="container">
                <h1>Pending tasks: {pending}</h1>
                <div className="task-list">
                    <div className="items">
                        <ol>
                            {list.map(task => (
                                <li key={task.id}>
                                    {task.text}
                                    <div className="btn">
                                        {!task.completed && <Button text="Complete" performTask={() => completeTask(task.id)} style={completeBtn} />}
                                        <Button text="Delete" performTask={() => deleteTask(task.id)} style={deleteBtn} />
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="task">
                    <Input value={task} taskList={(e) => setTask(e.target.value)} style={inputStyle} />
                    <Button text="Add" performTask={showTask} style={btnStyle}/>

                </div>
            </div>    
        </>
    );
}
