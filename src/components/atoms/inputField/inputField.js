import style from './inputField.module.css'

export default function Input(props){


    return(
        <>
            <input type="text" className={style.inputBox} value={props.value} onChange={props.performTask} />
        </>
    )
}