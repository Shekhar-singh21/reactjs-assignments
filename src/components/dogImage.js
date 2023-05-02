import React, { useEffect, useState } from 'react';
import './dogImage.css'



export default function DogImageChanger(){
    const[image,setImage] = useState("https://media.istockphoto.com/id/1386052499/photo/cute-tabby-cat-on-the-edge-of-a-chair-in-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=Y9DNiD8KbgDx2HKVMPooNEzCsLYVf9nJXvtvdleZ73I=")
    const [error,setError] = useState()

    async function getImage(){

        try{
            const response = await fetch(" https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setImage(data.message);
                // console.log(response)
                // console.log(data)
                console.log("hii")
        }catch(error){
            setError(`Something went wrong ${error.message}`)
        }
    }

     useEffect(()=>{
        getImage()

     },[])

    return(
        <>
            <div className='gallery'>
                <img src={image}  alt="Not Foundd"  className='img'/>
                <h1 >{error}</h1>
            </div>
        </>
    )
}