import style from './inputField.module.css'

export default function Input(props){


    return(
        <div className={style.inputfield}>
            <input className={style.inputbox} type={props.type} placeholder={props.placeholder}
                value={props.value} onChange={props.performTask}
            />
        </div>
    )
}