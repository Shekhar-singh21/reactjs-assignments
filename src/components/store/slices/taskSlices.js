import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usertaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.find((item) => item.id === taskId);
      if (task) {
        task.status = task.status === "pending" ? "completed" : "pending";
      }
    },
  },
});

export const { addTask, toggleTask } = usertaskSlice.actions;
export default usertaskSlice.reducer;
