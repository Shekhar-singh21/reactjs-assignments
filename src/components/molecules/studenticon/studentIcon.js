import { NavLink } from 'react-router-dom'
import Button from '../../atoms/buttons/button'
import style from './student.module.css'

export default function StudentIcon(){


    return(
        <div  className={style.studenticon}>
        <div className={style.studentImg}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgE8F5xrlQvLwjuhmPpoas_b3j_wbYvMyDw&usqp=CAU" alt="not found" />
        </div>

        <div>
           <NavLink to={'/signupForm'}><Button text='Student'/></NavLink>
        </div>



        </div>
    )
}