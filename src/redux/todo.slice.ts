import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo, ITodoSliceState } from "../@types/todo";

const initialState: ITodoSliceState = {
  tasks: [],
}

export const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      state.tasks = [...state.tasks, action.payload]
    },
    updateTaks: (state, action: PayloadAction<ITodo>) => {
      const { id, task, completed } = action.payload
      const taskFound = state.tasks.find(task => task.id === id)
      if (taskFound) {
        taskFound.task = task
        taskFound.completed = completed
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const taskFound = state.tasks.find(task => task.id === action.payload)
      if (taskFound) {
        state.tasks.splice(state.tasks.indexOf(taskFound), 1)
      }
    }

  }
})

export const { addTask, updateTaks, deleteTask } = todoSlice.actions;

export default todoSlice.reducer
