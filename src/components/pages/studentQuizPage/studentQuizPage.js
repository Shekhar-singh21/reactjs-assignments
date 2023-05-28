import { useState, useEffect } from 'react';
import style from './studentQuizPage.module.css';
import Button from '../../atoms/buttons/button';

export default function StudentPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setQuestions(storedQuestions);
    setAnswers(new Array(storedQuestions.length).fill(''));
  }, []);

  function handleAnswerChange(index, e) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = e.target.value;
    setAnswers(updatedAnswers);
  }

  function handleSubmit() {
    setShowResult(true);
  }

  function calculateScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  }

  return (
    <div className={style.studentPage}>
      <h1>This is Student Page</h1>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <p>Question: {question.question}</p>
            <p>Options: {question.options.join(', ')}</p>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e)}
              placeholder="Enter your answer"
            />
          </div>
        ))}
        <Button text="Submit" performTask={handleSubmit} />
        {showResult && (
          <div>
            <h2>Result:</h2>
            <p>Score: {calculateScore()} / {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}
