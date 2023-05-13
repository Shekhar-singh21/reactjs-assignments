import './button.css'



export default function Button(props){


    return(
        <>
            <button onClick={props.performTask} style={props.style}>{props.text}</button>
        </>
    )
}