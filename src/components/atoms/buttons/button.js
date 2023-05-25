import style from './button.module.css'

export default function Button(props){

    return(
        <>
            <button className={style.btn} onClick={props.performTask}>{props.text}</button>
        </>
    )
}