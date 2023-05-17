import { Routes,Route } from "react-router-dom";
import About from "../../atoms/navPages/about";
import Projects from "../../atoms/navPages/projects";
import Contact from "../../atoms/navPages/contact";
import Home from "../../atoms/navPages/home";
import Videos from "../../atoms/navPages/videos";


export default function Routing(){


    return(
        <Routes>
        
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Videos" element={<Videos/>}/>
        
        </Routes>
        
    )
}