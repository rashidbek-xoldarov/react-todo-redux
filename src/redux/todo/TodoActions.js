import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./TodoType";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const editTodo = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
  };
};

export const delTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};
