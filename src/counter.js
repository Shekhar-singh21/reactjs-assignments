import React, { useState } from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './counter.css'


export default function Counter(){

    const [count,setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        setCount(count > 0 ? count - 1 : count);
    }


    return(

        <>

            <div className="container">
            <h1>{count}</h1>


                <button id="btn1" onClick={increment}><ControlPointIcon/></button>
                <button id="btn2" onClick={decrement}><RemoveCircleOutlineIcon/></button>
            </div>
        </>
    )
}