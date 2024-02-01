import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name: "show",
    initialState: {
        data: []
    },
    reducers: {
        addShow(state, action) {
            state.data = action.payload
        }
    }
})

export default dataSlice.reducer;
export const { addShow } = dataSlice.actions;