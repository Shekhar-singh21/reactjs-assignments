import React from "react";
import './cards.css'



export default function Cards({productDetail}){

    const {
        productId,
        productPic,
        productName,
        Brand,
        productDescription,
        Price,
        Rating
    } = productDetail;

    function onClickHandle(){

        return(
            alert(`Product of is  ${productId} , which is ${productName}  of brand ${Brand} has of rupees 
            ${Price} is added in the cart , please proceed to pay !!! `)
        )
    }


    return(
        <>

        <div className="card">
        <img src={productPic} alt="not available"  className="img"/>
        <h3>{Brand}</h3>
        <p style={{marginLeft:'2rem'}}>{productDescription}</p>
        <h4>{Price}</h4>
        <h5>{Rating}</h5>
        <button className="btn" onClick={onClickHandle} >Add to Card</button>

        </div>

        </>
    )


}