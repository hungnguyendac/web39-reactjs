import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducerSlice from "./reducers/counterReducerSlice";

const reducer = combineReducers({
    counterReducerSlice,
});

const store = configureStore({
    reducer
});

export default store;