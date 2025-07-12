// src/components/QuestionCard.jsx
import React from 'react';

const QuestionCard = ({ question, onClick }) => {
  return (
    <div className="question-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <h3>{question.title}</h3>
      <div>
        {question.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p>{question.description}</p>
      <div>{question.answers} ans</div>
    </div>
  );
};

export default QuestionCard;
