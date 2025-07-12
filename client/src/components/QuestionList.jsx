// src/components/QuestionList.jsx
import React from 'react';
import QuestionCard from './QuestionCard';

const QuestionList = ({ questions }) => {
  return (
    <div className="question-list">
      {questions.map((q, idx) => (
        <QuestionCard key={idx} question={q} />
      ))}
    </div>
  );
};

export default QuestionList;
