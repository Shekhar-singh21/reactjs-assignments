import React,{useState} from "react";
import './nameUpdater.css'



export default function NameUpdater(){

    const [name,setName]= useState('');
    const [displayName,setDisplayName] = useState('***');


    function changeName(e){
        setName(e.target.value)

    }

   function formSubmit(e){
    e.preventDefault();
        setDisplayName(name);
        setName("");
   }




    return(
        <>
        <div>
        <form className="form" onSubmit={formSubmit}>
        <input type="text" value={name} onChange={changeName} className="input"/>
        <button className="btn" >Submit</button>

        <h1>Hi my name is: {displayName}</h1>
        </form>
        </div>





        </>
    )
}