import React from "react";
import './user.css'


export default function UserData({user}){


    return(
        <>
            <div className="data">
                <img src={user.avatar} alt="not found" />
                <h1>{user.id}</h1>
                <h1>{user.first_name} {user.last_name}</h1>
                <p>{user.email}</p>
            </div>
        </>
    )
}