import { useState } from "react";
import MenuBtn from "../../atoms/hamMenuBtn/hamMenu";
import LoginBtn from "../../atoms/login/loginBtn";
import Logo from "../../atoms/logo/logo";
import NavLinks from "../../molecules/navlinks/navlinks";
import './topbar.css'




export default function TopBar(){
    


    return(
        <div className="top-contents">
            <Logo/>
            <NavLinks/>
            <MenuBtn/>
        </div>
    )
}