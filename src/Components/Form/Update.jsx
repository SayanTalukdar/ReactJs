import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { editTodo } from "../../Redux/Actions";
import {
  findIndexOf,
  getSpecificItems,
} from "../../Utils/utils";
import "./form.css";

const Update = () => {
  const { ID } = useParams();
  const dipatch = useDispatch();
  let data = getSpecificItems(ID);
  let index = findIndexOf(data);


  const dataum = useSelector((todoState) => todoState.todo.todos);

  const [title, setTitle] = useState(data[0].title);
  const [catogries, setCatogries] = useState(data[0].catogries);
  const [content, setContent] = useState(data[0].content);



  let todo = {
    id: data[0].id,
    title: title,
    catogries: catogries,
    content: content,
    likes: data[0].likes
  };

  const Submit = (e) => {
    e.preventDefault();
    dataum[index] = todo;
    dipatch(editTodo(dataum));
    setTitle("");
    setCatogries("");
    setContent("");
  };

  const cancel = (e) => {
    e.preventDefault();
    setTitle("");
    setCatogries("");
    setContent("");
  };



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
          <input
            className="input"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
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

export default Update;
