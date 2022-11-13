import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  inputData: "",
  editId: "",
}

export const stateSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setIsShow: state => {
      state.isShow = !state.isShow
    },
    setEditId: (state, action: PayloadAction<string>) => {
      state.editId = action.payload
    },
    setInputData: (state, action: PayloadAction<string>) => {
      state.inputData = action.payload
    }
  }
})

export const { setIsShow, setEditId, setInputData } = stateSlice.actions;

export default stateSlice.reducer
