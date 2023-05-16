
import './input.css'

export default function Input(props){


    return(
        <div>
            <input type="text" value={props.value} onKeyPress={props.pressedByKey} onChange={props.performTask} id="input-box" />
        </div>
    )
}