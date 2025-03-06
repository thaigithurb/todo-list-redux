import { createStore } from "redux";
// import { counterReducer } from "./reducers/counter";
import { todoListReducer } from "./reducers/todolist";

// export const store = createStore(counterReducer);
export const store = createStore(todoListReducer);
