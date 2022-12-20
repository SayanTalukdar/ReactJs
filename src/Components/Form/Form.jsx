import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getLocalItems, setTodos } from "../../Utils/utils";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions";

import "./form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [catogries, setCatogries] = useState("");
  const [content, setContent] = useState("");


  const [todos, settodos] = useState(getLocalItems());
  const dispatch = useDispatch();

  let todo = {
    id: Date.now(),
    title: title,
    catogries: catogries,
    content: content,
    likes:0,
  };

  const Submit = (e) => {
    e.preventDefault();
    settodos([...todos, todo]);
    setTitle("");
    setCatogries("");
    setContent("");
    dispatch((addTodo(todos)));
  };

  const cancel = (e) => {
    e.preventDefault();
    setTitle("");
    setCatogries("");
    setContent("");
  };

  useEffect(() => {
    setTodos(todos);
    dispatch((addTodo(todos)));
  }, [todos,dispatch]);

  return (
    <div>
      <form onSubmit={Submit} className="form-container">
        <div className="box">
          <label>Title</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="box">
          <label>Catogries</label>
          <input
            className="input"
            type="text"
            value={catogries}
            onChange={(e) => setCatogries(e.target.value)}
          ></input>
        </div>
        <div className="box">
          <label>Content</label>
          <textarea
            className="input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons">
          <button type="submit" className="btn submit">
            Submit
          </button>
          <button onClick={cancel} className="btn cancel">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
