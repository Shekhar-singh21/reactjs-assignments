import React from 'react'
import './navlinks.css'
import LoginBtn from '../../atoms/login/loginBtn'



export default function NavLinks(){

    const lists = ['Home','About','Projects','Videos','Contact']


    return(
        <div className='navlinks-wrapper'>
        <ul className='nav-lists'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Projects</a></li>
            <li><a>Videos</a></li>
            <li><a>Contact</a></li>
            <LoginBtn/>
            

        </ul>
        </div>
    )
}