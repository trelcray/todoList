import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  tasks: string;
}

interface ITodoSliceState {
  tasks: ITodo[]
}

const initialState: ITodoSliceState = {
  tasks: [],
}

export const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.tasks = [...state.tasks, {tasks: action.payload}]
    } 
  }
})

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer
