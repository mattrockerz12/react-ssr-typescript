import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoResponse } from "../../../api/types";

interface ITodoState {
  todo: ITodoResponse | null;
}

const initialState: ITodoState = {
  todo: null,
};

export const todoSlice = createSlice({
  initialState,
  name: "todoSlice",
  reducers: {
    todoState: (state, action: PayloadAction<ITodoResponse>) => {
      state.todo = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const { todoState } = todoSlice.actions;
