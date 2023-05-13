 import './input.css'

 export default function Input(props){


    return(
        <div>
            <input type="text" placeholder="Add New Task" onChange={props.taskList} value={props.value } style={props.style} />
        </div>
    )
 }