import { useState } from 'react';
import { postAnswer } from '../api/api';
import ReactQuill from 'react-quill';

export default function AnswerForm({ questionId, onAnswerPosted }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postAnswer(questionId, { content });
    setContent('');
    onAnswerPosted();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <h3 className="text-lg font-semibold">Your Answer</h3>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Submit Answer
      </button>
    </form>
  );
}
