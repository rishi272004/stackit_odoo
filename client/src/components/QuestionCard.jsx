// src/components/QuestionCard.jsx
import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <div className="question-card">
      <h3>{question.title}</h3>
      <div className="tags">
        {question.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <p className="description">{question.description}</p>
      <div className="meta">
        <span className="user">{question.user}</span>
        <span className="answers">{question.answers} ans</span>
      </div>
    </div>
  );
};

export default QuestionCard;
