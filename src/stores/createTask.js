import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createTask: false,
};

const createTask = createSlice({
  name: "createTask",
  initialState,
  reducers: {
    taskCreate: (state, action) => {
      state.taskCreate = action.payload;
    },
  },
});

export const { taskCreate } = createTask.actions;
export default createTask.reducer;
