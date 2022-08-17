import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTaskList: false
};

const alltasks = createSlice({
  name: "alltasks",
  initialState,
  reducers: {
    allTaskList: (state, action) => {
      state.allTaskList = action.payload;
    },
    getMyTasks: (state, action) => {
      state.getMyTasks = action.payload
    }
  },
});

export const { allTaskList, getMyTasks } = alltasks.actions;
export default alltasks.reducer;