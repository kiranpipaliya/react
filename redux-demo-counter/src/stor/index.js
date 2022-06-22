import { configureStore } from "@reduxjs/toolkit"

import counterSlice from "./counter";
import authSlice from "./auth";

const storeCounter = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});

export default storeCounter;