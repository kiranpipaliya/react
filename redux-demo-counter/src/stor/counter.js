
import { createSlice } from "@reduxjs/toolkit"

const counterInitialStateState = { counter: 0, showCashe: true }
const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialStateState,
    reducers: {
        increment: (state) => {
            state.counter++
        },
        decrement: (state) => {
            state.counter--
        },
        incises: (state, action) => {
            state.counter = state.counter + action.payload
        },
        toggleCounter: (state) => {
            state.showCashe = !state.showCashe
        },
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice;