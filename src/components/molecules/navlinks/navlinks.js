import React from 'react'
import './navlinks.css'
import LoginBtn from '../../atoms/login/loginBtn'
import { Link } from 'react-router-dom'
import Home from '../../atoms/navPages/home'
import About from '../../atoms/navPages/about'




export default function NavLinks(){

    const lists = ['Home','About','Projects','Videos','Contact']


    return(
        <div className='navlinks-wrapper'>
        <ul className='nav-lists'>
            <li><a><Link to={'/'}> Home </Link></a></li>
            <li><a><Link to={'/About'}>About </Link></a></li>
            <li><a><Link to={'/Projects'}>Projects </Link></a></li>
            <li><a><Link to={'/Videos'}>Videos </Link></a></li>
            <li><a><Link to={'/Contact'}>Contact </Link></a></li>
            <LoginBtn/>
            

        </ul>
        </div>
    )
}