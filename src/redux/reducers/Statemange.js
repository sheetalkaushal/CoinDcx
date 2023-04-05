import { createSlice } from "@reduxjs/toolkit";
const Statemange = createSlice({
  name: "Status",
  initialState: { checkStatus: false },
  reducers: {
    loginReducer: (state, action) => {
      state.checkStatus = action.payload;
    },
  },
});
export const { loginReducer } = Statemange.actions;
export default Statemange.reducer;
