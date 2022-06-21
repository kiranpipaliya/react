import { createSlice, configureStore } from "@reduxjs/toolkit"

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

const authInitialState = { isAuthenticate: false }
const authSlice = createSlice({
    name: "authentication",
    initialState: authInitialState,
    reducers: {
        login: (state) => {
            state.isAuthenticate = true
        },
        logout: (state) => {
            state.isAuthenticate = false
        }

    }
})

const storeCounter = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});


export const counterActions = counterSlice.actions;
export default storeCounter;