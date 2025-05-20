export const addTodo = (data) => {
  // console.log({ data });

  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

// Action Creators =>Functions

export const toggleTodoStatus = (todoId) => {
  return {
    type: "filter/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: "filter/prioritiesFilterChange",
    payload: priorities,
  };
};

