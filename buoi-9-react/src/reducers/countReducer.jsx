import React from "react";

const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case "up":
            return {
                ...state,
                count: state.count + 1,
            };
        case "down":
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default countReducer;
