import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todo/TodoActions";

import "./Form.css";

const Form = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const changeInputHandler = (evt) => {
    setValue(evt.target.value);
  };

  const submitFormHandler = (evt) => {
    evt.preventDefault();
    const obj = {
      id: Math.random(),
      title: value,
      isCompleted: false,
    };
    dispatch(addTodo(obj));
    setValue("");
  };

  return (
    <>
      <form className="site-form" onSubmit={submitFormHandler}>
        <label className="site-form__label">
          <input
            className="site-form__text"
            type="text"
            name="user_text"
            placeholder="Enter todos"
            value={value}
            onChange={changeInputHandler}
          />
        </label>
        <button className="site-form__btn" type="submit">
          +
        </button>
      </form>
    </>
  );
};

export default Form;
