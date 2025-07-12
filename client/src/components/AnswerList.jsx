export default function AnswerList({ answers }) {
  return (
    <div className="space-y-4 mt-4">
      {answers.length === 0 && <p className="text-gray-600">No answers yet.</p>}
      {answers.map(a => (
        <div key={a._id} className="border rounded p-3 bg-gray-50">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: a.content }}
          />
          <p className="text-sm text-gray-500 mt-2">By: {a.user?.username}</p>
        </div>
      ))}
    </div>
  );
}
