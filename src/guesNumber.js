import React, { useState } from "react";
import './guessNumber.css'




export default function GuessNumber(){
    const [message,setMessage]= useState(' ')
    const [attempt, setAttempt]= useState(0)
    const [guess,setGuess] = useState()

    function getNumber(e){
        setGuess(parseInt(e.target.value))
    }

    function userNumber(){
        setAttempt(attempt + 1 )

        if(guess === 10){
            setMessage(`Congratulation you have entered right Guess , you attempted ${attempt} times !`)
            setGuess(' ')

        }else if(guess > 10){
            alert('you guessed a bigger number!')
            setGuess(' ')
        }else if (guess < 10){
            alert('you guessed a smaller number')
            setGuess(' ')
        }

    }
    return(
        <>

        <div className="game">
        <input type="text" onChange={getNumber} value={guess}  placeholder="Guess Lucky Number " className="input"/>
        <button className="btn" onClick={userNumber}>Match Number</button>
        <h1>{message}</h1>
        </div>
        </>
    )
}