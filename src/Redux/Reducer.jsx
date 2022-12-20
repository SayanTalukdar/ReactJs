import {
  GET_BY_ID,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  LIKE,
  GET_TODO,
} from "./Constants";

import { setTodos } from "../Utils/utils";

let initialState = {
  id: null,
};

let todoState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BY_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export const todoStateReducer = (state = todoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
      };
    case EDIT_TODO:
      const updateState = state.todos.map((update) => {
        
          return update.id === action.payload[0].id
            ? action.payload[0]
            : update;
        
      });
      state.todos = updateState;
      localStorage.clear();
      setTodos(state.todos);
      return  state ;
    case LIKE:
      const updateLikes = state.todos.map((update) => {
        
          return update.id === action.payload.id?{...update,likes:action.payload.likes}:update
           
        
      });
      state.todos = updateLikes;
      localStorage.clear();
      setTodos(state.todos);

      return  state ;
      case DELETE_TODO:
        return{

        }
    case GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
