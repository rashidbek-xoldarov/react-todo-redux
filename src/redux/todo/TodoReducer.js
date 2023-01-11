const init = {
  todo: [],
};

export const todoReducer = (state = init, action) => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todo: [...state.todo, action.payload],
    };
  } else if (action.type === "EDIT_TODO") {
    return {
      ...state,
      todo: action.payload,
    };
  } else if (action.type === "DELETE_TODO") {
    return {
      ...state,
      todo: action.payload,
    };
  } else if (action.type === "CHECK_TODO") {
    return {
      ...state,
      todo: action.payload,
    };
  } else {
    return state;
  }
};
