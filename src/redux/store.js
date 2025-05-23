// import { createStore } from "redux" ;

// import rootReducer from "./reducer";

// import { composeWithDevTools } from '@redux-devtools/extension'

// const composedEnhancers = composeWithDevTools()

// const store =createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoListSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
