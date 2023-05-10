import React from 'react';
import './card.css'



export default function Card(props){

    // const[image,name,university,designation,company,experience] = props;


    return(
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <h6>{props.designation} </h6>
            <p>{props.experience}</p>

        </div>
    )
}