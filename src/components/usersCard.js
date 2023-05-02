import React, { useEffect, useState }  from "react";
import UserData from "./users/user";
import './userCard.css'

export default function UserCards(){

    const [users,setUsers] = useState([]);
    const [showCards, setShowCards] = useState(false);
    console.log(users)


    async function getUserData(){
        try{
            const response = await fetch("https://reqres.in/api/users/ ");
            const data = await response.json();
            setUsers(data.data);
            setShowCards(true);


        }
        catch(error){
            console.log(error)
        }
     }

    return(
        <>
            
            {showCards &&
                <div className="cards">
                    {users && users.map(user=>{
                        return <UserData key={user.id} user ={user}/>
                    })}
                </div>
            }
            <button className="btn" onClick={getUserData}>Get User Details</button>
        </>
    )
}
