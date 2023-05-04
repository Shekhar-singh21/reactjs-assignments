import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'




export default function DogImageChanger(){

    const[image,setImage] = useState(' ')

    useEffect(()=>{

        getImage()

    },[])



    function getImage(){


        axios.get('https://dog.ceo/api/breeds/image/random')
        .then((res)=>{
            setImage(res.data.message)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    return(
        <>

            <div>
                <img src={image} alt="not found" />
            </div>
        </>
    )
}