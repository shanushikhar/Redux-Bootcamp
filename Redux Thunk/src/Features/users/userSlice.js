import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Bang" },
  { id: "1", name: "Jonas" },
  { id: "2", name: "Maxi" },
];

const usersData = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllusers = (state) => state.users;
export default usersData.reducer;
