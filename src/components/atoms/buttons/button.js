import './button.css'

export default function Button(props){


    return(
        <div>
            <button  className="btn" onClick={props.performTask}>{props.text}</button>
        </div>
    )
}