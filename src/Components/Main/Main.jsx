import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../Posts/Posts";
import "./main.css";
import Form from "../Form/Form";
import Content from "../Content/Content";
import Update from '../Form/Update'

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-sub-conatiner">
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/add-new-todo" element={<Form />}></Route>
          <Route path="/content/:ID" element={<Content />}></Route>
          <Route path="/update/:ID" element={<Update />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
