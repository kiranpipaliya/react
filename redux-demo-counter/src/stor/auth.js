import { createSlice } from "@reduxjs/toolkit"

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
export const authActions = authSlice.actions;
export default authSlice;