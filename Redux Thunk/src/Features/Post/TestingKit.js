import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datas: [
    { id: 1, name: "Test" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
  ],
  value: 17,
};

const usersData = createSlice({
  name: "testing",
  initialState,
  reducers: {},
});

export const getAlldata = (state) => state.nameFromStore_js;
export default usersData.reducer;
