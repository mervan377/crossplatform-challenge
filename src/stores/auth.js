import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
  session: false
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.session = true  
    },
    logout: (state) => {
      state.user = false;
      state.session = false
    },
  },
});



export const { login, logout } = auth.actions;
export default auth.reducer;
