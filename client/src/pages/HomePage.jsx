// src/pages/HomePage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionList from '../components/QuestionList';

const dummyQuestions = [
  {
    title: "How to join 2 columns in a data set to make a separate column in SQL",
    tags: ["SQL", "Beginner"],
    description: "I do not know the code for it as I am a beginner. As an example...",
    user: "User Name",
    answers: 5,
  },
  {
    title: "How to center a div in CSS?",
    tags: ["CSS", "HTML"],
    description: "I need help centering a div horizontally and vertically.",
    user: "User123",
    answers: 3,
  },
  {
    title: "What is a closure in JavaScript?",
    tags: ["JavaScript", "Functions"],
    description: "I’ve heard of closures but not sure how they work.",
    user: "NewbieCoder",
    answers: 0,
  },
  {
    title: "Why use useEffect in React?",
    tags: ["React", "Hooks"],
    description: "Why is useEffect needed and how does it differ from useState?",
    user: "ReactDev",
    answers: 0,
  },
  {
    title: "Difference between let, var, and const in JS?",
    tags: ["JavaScript", "ES6"],
    description: "What is the scope difference between these three?",
    user: "FrontendGuru",
    answers: 2,
  },
  {
    title: "How to write unit tests in Jest?",
    tags: ["Testing", "Jest"],
    description: "How do I get started with writing tests using Jest?",
    user: "QA_Tester",
    answers: 4,
  },
];

const HomePage = () => {
  const [questions, setQuestions] = useState(dummyQuestions);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('Newest');
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 3;
  const navigate = useNavigate();

  const getFiltered = () => {
    let filtered = [...questions];
    if (filter === 'Unanswered') {
      filtered = filtered.filter(q => q.answers === 0);
    }

    filtered = filtered.filter(q =>
      q.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return filtered.slice(startIndex, endIndex);
  };

  const totalFiltered = questions.filter(q =>
    (filter === "Unanswered" ? q.answers === 0 : true) &&
    q.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalFiltered.length / questionsPerPage);

  const filteredQuestions = getFiltered();

  const handleQuestionClick = () => {
  navigate('/question');
};

  return (
    <div className="homepage">
      <div className="header">
        <h1>StackIt</h1>
        <button className="ask-button" onClick={() => navigate('/ask')}>Ask New Question</button>
        <div className="filters">
          <button
            className={filter === "Newest" ? "active-tab" : ""}
            onClick={() => {
              setFilter("Newest");
              setCurrentPage(1);
            }}
          >
            Newest
          </button>
          <button
            className={filter === "Unanswered" ? "active-tab" : ""}
            onClick={() => {
              setFilter("Unanswered");
              setCurrentPage(1);
            }}
          >
            Unanswered
          </button>
          <button
            className={filter === "More" ? "active-tab" : ""}
            onClick={() => {
              setFilter("More");
            }}
          >
            More ▾
          </button>
        </div>
        <input
          className="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="login">Login</button>
      </div>
      <QuestionList questions={filteredQuestions} onQuestionClick={handleQuestionClick} />


      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>{'<'}</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>{'>'}</button>
      </div>
    </div>
  );
};

export default HomePage;
