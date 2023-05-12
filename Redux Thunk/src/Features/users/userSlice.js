import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "User 1" },
  { id: "1", name: "User 2" },
  { id: "2", name: "User 3" },
];

const usersData = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllusers = (state) => state.users;
export default usersData.reducer;
