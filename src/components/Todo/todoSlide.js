import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("to-do-list")) || [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addJob: (state, action) => {
      const newJob = {
        id: v4(),
        name: action.payload,
        isComplete: false,
      };
      state.todoList.push(newJob);
    },
    checkJob: (state, action) => {
      const id = action.payload;
      const index = state.todoList.findIndex((item) => item.id === id);
      state.todoList[index].isComplete = !state.todoList[index].isComplete;
    },
    checkAllJob: (state, action) => {
      const check = action.payload;
      state.todoList.map((item) => {
        item.isComplete = check;
        return item;
      });
    },
    clearJobs: (state) => {
      const newList = state.todoList.filter(
        (item) => item.isComplete === false
      );
      console.log(newList);
      state.todoList = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addJob, checkJob, checkAllJob, clearJobs } = todoSlice.actions;

export default todoSlice.reducer;
