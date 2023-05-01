import React, { useRef, useEffect } from 'react'
import './imageChanger.css'



export default function ImageChanger() {


    const imageref = useRef(null)


    useEffect(() => {
        alert('Click on button to change the image')

    }, [getImage])


    function getImage() {
        imageref.current.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 100)}`
    }




    return (
    <div className='container'>
        <div className='changer'>
            <img src="https://wallpapers.com/images/featured/wj7msvc5kj9v6cyy.jpg" ref={imageref} className='img' alt="not available" />


            <button className='btn' onClick={getImage} >Change The Image</button>



        </div>
    </div>
    )
}