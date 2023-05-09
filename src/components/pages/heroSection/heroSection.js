import SeeHowBtn from "../../atoms/seeHowBtn/seeHowBtn";
import './heroSection.css'



export default function HeroSection(){


    return(
        <div className="container">
        <div className="hero-leftside">
        <h1>Be There</h1>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, consequatur.</h6>
        <SeeHowBtn/>
        </div>
        <div className="hero-rightside">

        </div>


        </div>
    )
}