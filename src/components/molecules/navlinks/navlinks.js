import { NavLink } from "react-router-dom";
import style from './navlinks.module.css'




export default function NavLinks(){


    return(
        <div>
            <nav>
                <ul className={style.links}>
                    <li>
                  <NavLink to={'/'} className={style.nav}> Home </NavLink> 
                    </li>
                    <li>
                   <NavLink to={'./favMovies'} className={style.nav}>Favorites </NavLink> 
                    </li>
                </ul>
            </nav>

        </div>
    )
}