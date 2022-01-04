import { configureStore } from "@reduxjs/toolkit";
import todoSlide from "../components/Todo/todoSlide";

export const store = configureStore({
  reducer: {
    todo: todoSlide,
  },
});
