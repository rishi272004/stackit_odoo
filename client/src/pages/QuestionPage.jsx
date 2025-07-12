import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchQuestion } from '../api/api';
import AnswerList from '../components/AnswerList';
import AnswerForm from '../components/AnswerForm';

export default function QuestionPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  const loadQuestion = async () => {
    const res = await fetchQuestion(id);
    setQuestion(res.data);
  };

  useEffect(() => {
    loadQuestion();
  }, [id]);

  if (!question) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold">{question.title}</h1>
      <div
        className="prose max-w-none my-4"
        dangerouslySetInnerHTML={{ __html: question.description }}
      />
      <div className="mb-2">
        {question.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 text-sm px-2 py-1 rounded mr-2">{tag}</span>
        ))}
      </div>

      <h2 className="text-lg font-semibold mt-6">Answers</h2>
      <AnswerList answers={question.answers} />

      <AnswerForm questionId={id} onAnswerPosted={loadQuestion} />
    </div>
  );
}
