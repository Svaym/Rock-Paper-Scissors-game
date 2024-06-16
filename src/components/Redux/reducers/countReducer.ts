import { RootState } from "@reduxjs/toolkit/query";
import { createSlice } from "@reduxjs/toolkit";

export interface CountState {
  count: number
}
const initialState: CountState = {
  count: 0
}
export const countReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count++
    },
    decrement: state => {
      state.count--
    }
  }
})
export const { increment, decrement } = countReducer.actions
export const selectCounter = (state: RootState) => state.counter.count
export default countReducer.reducer
