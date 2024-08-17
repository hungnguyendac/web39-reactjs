import { createSlice } from "@reduxjs/toolkit";

const counterReducerSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { increment, decrement } = counterReducerSlice.actions;
export default counterReducerSlice.reducer;