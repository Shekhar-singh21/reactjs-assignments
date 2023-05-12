import React from 'react';



export default function Square(props){



    return(
        <div onClick={props.onClick} className='sqaure' style={{border:"1px solid white", width:"140px",height:"140px",margin:"auto"}}>
        <h1 style={{color:"white"}}>{props.value}</h1>

        </div>
    )
}