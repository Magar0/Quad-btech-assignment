import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlices";

const store = configureStore({
    reducer: {
        show: dataSlice
    }
})

export default store;