import style from './button.module.css'


export default function Button(props){


    return(
        <div>
        <button className={style.btn} onClick={props.performTask} text={props.text}>{props.text}</button>
        </div>
    )
}