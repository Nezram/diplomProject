import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        date: new Date(),
      });
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodo(state, action) {
        let checkTodo = state.todos.find(todo => todo.id === action.payload.id)
        checkTodo.completed = !checkTodo.completed
    },
    editTodo (state,action) {
      let editTodo = state.todos.find(todo => todo.id === action.payload.id)
      editTodo.text = action.payload.text
    }
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo, addTodoDb } = todoSlice.actions;

export default todoSlice.reducer;
