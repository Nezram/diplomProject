import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import moneyReducer from "./moneySlice";
export default configureStore({
  reducer: {
    todos: todoReducer,
    money: moneyReducer,
  },
});
