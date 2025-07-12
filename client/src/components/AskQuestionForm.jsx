import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // default theme
import "./AskQuestionForm.css";
import { toast } from "react-toastify";

const AskQuestionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // now HTML
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !tags.trim()) {
      toast.error("Please fill in all fields before submitting!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    console.log({ title, description, tags });
    toast.success("Question submitted successfully!");

    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <div className="ask-container">
      <h2>Ask a New Question</h2>
      <form onSubmit={handleSubmit} className="ask-form">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="e.g. How do I center a div in CSS?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Explain your question in detail..."
          className="quill-editor"
        />

        <label htmlFor="tags">Tags <small>(comma separated)</small></label>
        <input
          id="tags"
          type="text"
          placeholder="e.g. javascript, css, html"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit" className="submit-btn">Submit Question</button>
      </form>
    </div>
  );
};

export default AskQuestionForm;
