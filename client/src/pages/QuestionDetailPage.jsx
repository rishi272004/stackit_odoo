import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionDetailPage.css';

const staticQuestion = {
  title: 'How to join 2 columns in a data set to make a separate column in SQL',
  tags: ['SQL', 'Beginner'],
  description:
    'I do not know the code for it as I am a beginner. As an example what I need to do is like there is a column 1 containing First name and column 2 consists of last name I want a column to combine',
  answers: [
    {
      id: 'a1',
      content: ['The || Operator.', 'The + Operator.', 'The CONCAT Function.'],
      votes: 5,
    },
    {
      id: 'a2',
      content: ['Use CONCAT_WS for readable formatting.'],
      votes: 2,
    },
  ],
};

const QuestionDetailPage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState(staticQuestion);
  const [userVotes, setUserVotes] = useState({});
  const [answerText, setAnswerText] = useState('');

  const handleVote = (answerId, type) => {
    const isLoggedIn = true; // Replace with real auth check later
    if (!isLoggedIn) {
      alert('Please login to vote!');
      return;
    }

    if (userVotes[answerId]) return;

    const updatedAnswers = question.answers.map((ans) =>
      ans.id === answerId
        ? { ...ans, votes: ans.votes + (type === 'up' ? 1 : -1) }
        : ans
    );

    setQuestion((prev) => ({ ...prev, answers: updatedAnswers }));
    setUserVotes((prev) => ({ ...prev, [answerId]: true }));
  };

  const handleSubmitAnswer = () => {
    if (!answerText.trim()) return;

    const newAnswer = {
      id: Date.now().toString(),
      content: [answerText],
      votes: 0,
    };

    setQuestion((prev) => ({
      ...prev,
      answers: [...prev.answers, newAnswer],
    }));

    setAnswerText('');
  };

  return (
    <div className="question-detail-page">
      <div className="breadcrumb" onClick={() => navigate('/')}>
        &lt; Question &gt; {question.title}
      </div>

      <h2>{question.title}</h2>
      <div className="tags">
        {question.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p>{question.description}</p>

      <h3>Answers</h3>
      {question.answers.map((ans) => (
        <div key={ans.id} className="answer">
          <button onClick={() => handleVote(ans.id, 'up')} disabled={userVotes[ans.id]}>
            ⬆
          </button>
          <span>{ans.votes}</span>
          <button onClick={() => handleVote(ans.id, 'down')} disabled={userVotes[ans.id]}>
            ⬇
          </button>
          <ul>
            {ans.content.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="submit-answer">
        <h4>Submit Your Answer</h4>
        <textarea
          rows="5"
          placeholder="Write your answer here..."
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
        />
        <button onClick={handleSubmitAnswer}>Submit</button>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
