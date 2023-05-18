import { useState } from "react"
import Button from "../../atoms/buttons/button"
import { QuestionsData } from "../../atoms/data/data"
import Timer from "../../atoms/timer/timer"
import './quiz.css'
import QuizResult from "../quizResult/quizResult"





export default function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[ score,setScore] = useState(0);
    const [clickedOption,setClickedOption] = useState(false)
    const [showResult,setShowResult] = useState(false)

    function ChangeQuestion() {
        if(currentQuestion<QuestionsData.length-1){
            
            setCurrentQuestion(currentQuestion + 1)
        }else{
            setShowResult(true)

        }

    }
    function getOption(e){
        const optionData = e.target.value;
        setClickedOption(optionData)
        console.log(optionData)
    }

    function updateScore(){
        if(clickedOption===QuestionsData[currentQuestion].correctAnswer){
            setScore(score+1)
        }
    }


    return (
        <div className="container">
        <div>
            <Timer/>
        </div>
            <p className="heading-text">Quiz App</p>
            <div className="wrapper">
            {showResult ?(
                <QuizResult score={score} totalScore={QuestionsData.length}/>
            ):(
                <>
                <div className="question">
                    <span id='question-number'>{currentQuestion + 1}. </span>
                    <span id='question-text'>{QuestionsData[currentQuestion].Question}</span>
                </div>
                <div className="options">
                    {QuestionsData[currentQuestion].Options.map((option, index) => {
                        return (
                            <>
                                <label key={index} >

                                    <input type="radio" value={option} className="option"  checked={clickedOption === option}
                                        onChange={getOption}
                                    />
                                  <p className="opt"> {option}</p>  

                                </label>
                            </>
                        )
                    })}
                </div>

            <Button text='Next' performTask={ChangeQuestion} />
            </>
            )}
            </div>

        </div>
    )
}