import Button from '../../atoms/buttons/button'
import style from './adminIcon.module.css'
import { NavLink } from 'react-router-dom'

export default function AdminIcon(){

    return(
        <div className={style.AdminIcon} >
        <div className={style.img}>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVK85uxS-fcdiqxGa3GCeLVR8PlxeYISUhdQ&usqp=CAU" alt="not found" />
        </div>
        <div className={style.button}>

        <NavLink to={'./adminLogin'}> <Button text="Admin"/> </NavLink>
        </div>

        </div>
    )
}