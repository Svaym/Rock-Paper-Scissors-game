import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalState {
  value: boolean
}
const initialState: ModalState = {
  value: false
}
export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: state => {
      state.value = true
    },
    close: state => {
      state.value = false
    }
  }
})
export const { open, close } = modalReducer.actions
export const selectModal = (state: RootState) => state.modal.value
export default modalReducer.reducer
