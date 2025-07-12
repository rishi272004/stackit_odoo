// src/components/QuestionList.jsx
import React from 'react';
import QuestionCard from './QuestionCard';
import { useNavigate } from 'react-router-dom';

const QuestionList = ({ questions }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/question'); // simple route (no ID)
  };

  return (
    <div className="question-list">
      {questions.map((q, idx) => (
        <QuestionCard key={idx} question={q} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default QuestionList;
