import React, { useState } from 'react';
import style from './Calculator.module.css';



const Calculator = () => {

    const[input1,setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result,setresult] = useState('');

    function handleUserInput1(e){
        setInput1(e.target.value)
    }

    function handleUserInput2(e){
        setInput2(e.target.value)
    }

    function handleAddition(){
        setresult(Number(input1)+Number(input2))
        setInput1('')
        setInput2('')
    }

    function handleSubtraction(){
        setresult(Number(input1)-Number(input2))
        setInput1('')
        setInput2('')
    }

    function handleMul(){
        setresult(Number(input1)* Number(input2))
        setInput1('')
        setInput2('')
    }

    function handleDiv(){
        setresult(Number(input1)/Number(input2))
        setInput1('')
        setInput2('')
    }

    function handleDelete(){
        setresult('')
    }


    return (
        <div className={style.Calculator}>
            <div className={style.input}>
                <input className={style.inp} type="text" value={input1} onChange={handleUserInput1} placeholder='enter number' />
                <input className={style.inp} type="text" value={input2} onChange={handleUserInput2} placeholder='enter number' />

            </div>

            <div className={style.btn}>
            <div className={style.inpMid}>

                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
            </div>
            <div className={style.inpMid}>

                <button onClick={handleMul}>*</button>
                <button onClick={handleDiv}>/</button>
            </div>


            </div>
                <h1 className={style.result}>{result} <p onClick={handleDelete}>X</p></h1>


        </div>
    )
}

export default Calculator