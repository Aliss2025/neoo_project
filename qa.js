import React, { useState } from 'react';

const QA = () => {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const questions = [
    { question: 'What is your name?', correctAnswer: 'My name is John' },
    { question: 'How old are you?', correctAnswer: 'I am 25 years old' },
    // เพิ่มคำถาม
  ];

  const handleAskQuestion = (q) => {
    setQuestion(q.question);
    setCorrectAnswer(q.correctAnswer);
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (userAnswer === correctAnswer) {
      alert('คำตอบถูกต้อง!');
    } else {
      alert('คำตอบผิด ลองใหม่อีกครั้ง!');
    }
  };

  return (
    <div>
      <h2>ถาม-ตอบภาษา</h2>
      {questions.map((q, index) => (
        <button key={index} onClick={() => handleAskQuestion(q)}>
          ถาม: {q.question}
        </button>
      ))}
      {question && (
        <div>
          <p>{question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="พิมพ์คำตอบของคุณ"
          />
          <button onClick={handleCheckAnswer}>ตรวจสอบคำตอบ</button>
        </div>
      )}
    </div>
  );
};

export default QA;
