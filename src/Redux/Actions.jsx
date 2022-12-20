import {
  GET_BY_ID,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  LIKE,
  GET_TODO,
} from "./Constants";
import {
  setTodos,
  getLocalItems,
  deletePost,
} from "../Utils/utils";

export const setId = (id) => {
  return {
    type: GET_BY_ID,
    payload: id,
  };
};

export const getTodo = () => {
  const todo = getLocalItems();
  return {
    type: GET_TODO,
    payload: todo,
  };
};

export const addTodo = (todo) => {
  setTodos(todo);
  return {
    type: ADD_TODO,
  };
};

export const deleteTodo = (id) => {
  let todo = deletePost(id);
  setTodos(todo);
  return {
    type: DELETE_TODO,
  };
};

export const editTodo = (todos) => {
  return {
    type: EDIT_TODO,
		payload:todos
  };
};

export const like = (id,likes) => {

	let obj = {
		id,
		likes
	}
  return {
    type: LIKE,
		payload:obj
  };
};
