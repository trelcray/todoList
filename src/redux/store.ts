import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo.slice'
import stateReducer from './state.slice'

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
    states: stateReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch