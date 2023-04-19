import React from 'react'

export default function ReactBenefits(){
    const Benefits = ['Component-based architecture','Virtual DOM for efficient updates','Rich ecosystem and community','Cross-platform development','Strong community support'];
    return(
        <>
        <h1>Benefits of using React</h1>
        <ol>
        {
          Benefits.map(item=><li>{item}</li>)
        }
        </ol>
        </>
    )
}