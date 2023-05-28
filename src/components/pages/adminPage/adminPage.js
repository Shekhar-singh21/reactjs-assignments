import { useState, useEffect } from 'react';
import style from './adminPage.module.css';
import Input from '../../atoms/inputfield/inputField';
import Button from '../../atoms/buttons/button';

export default function AdminPage() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editQuestionIndex, setEditQuestionIndex] = useState(null);
  const [existingQuestions, setExistingQuestions] = useState([]);
  const [attachment, setAttachment] = useState(null);

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    setExistingQuestions(storedQuestions);
  }, []);

  function handleQuestionChange(e) {
    setQuestion(e.target.value);
  }

  function handleOptionChange(index, e) {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  }

  function handleCorrectAnswerChange(e) {
    setCorrectAnswer(e.target.value);
  }

  function handleAttachmentChange(e) {
    const file = e.target.files[0];
    setAttachment(file);
  }

  function handleAddQuestion(e) {
    e.preventDefault();

    const questionData = {
      question,
      options,
      correctAnswer,
      attachment,
    };

    let updatedQuestions = [...existingQuestions];

    if (editMode && editQuestionIndex !== null) {
      updatedQuestions[editQuestionIndex] = questionData;
    } else {
      updatedQuestions.push(questionData);
    }

    localStorage.setItem('questions', JSON.stringify(updatedQuestions));

    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
    setAttachment(null);
    setEditMode(false);
    setEditQuestionIndex(null);
    setExistingQuestions(updatedQuestions);
  }

  function handleEditQuestion(index) {
    const selectedQuestion = existingQuestions[index];
    setQuestion(selectedQuestion.question);
    setOptions(selectedQuestion.options);
    setCorrectAnswer(selectedQuestion.correctAnswer);
    setAttachment(selectedQuestion.attachment);
    setEditMode(true);
    setEditQuestionIndex(index);
  }

  function handleDeleteQuestion(index) {
    const updatedQuestions = [...existingQuestions];
    updatedQuestions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
    setExistingQuestions(updatedQuestions);
  }

  return (
    <div className={style.adminPage}>
      <h1>This is Admin Page</h1>
      <div>
        <Input value={question} performTask={handleQuestionChange} placeholder="Enter the question" />
        <div>
          <h3>Options</h3>
          {[0, 1, 2, 3].map((index) => (
            <Input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={options[index]}
              performTask={(e) => handleOptionChange(index, e)}
            />
          ))}
        </div>
        <div>
          <h3>Correct Answer</h3>
          <select value={correctAnswer} onChange={handleCorrectAnswerChange}>
            <option value="">Select Correct Answer</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3>Attachment</h3>
          <input type="file" onChange={handleAttachmentChange} />
        </div>
        <Button text={editMode ? 'Update Question' : 'Add Question'} performTask={handleAddQuestion} />
        {editMode && (
          <Button
            text="Cancel Edit"
            performTask={() => {
              setEditMode(false);
              setEditQuestionIndex(null);
              setQuestion('');
              setOptions(['', '', '', '']);
              setCorrectAnswer('');
              setAttachment(null);
            }}
          />
        )}
      </div>
      <div>
        <h2>Existing Questions:</h2>
        {existingQuestions.map((existingQuestion, index) => (
          <div key={index}>
            <p>Question: {existingQuestion.question}</p>
            <p>Options: {existingQuestion.options.join(', ')}</p>
            {existingQuestion.attachment && (
              <p>Attachment: {existingQuestion.attachment.name}</p>
            )}
            <Button text="Edit" performTask={() => handleEditQuestion(index)} />
            <Button text="Delete" performTask={() => handleDeleteQuestion(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}
