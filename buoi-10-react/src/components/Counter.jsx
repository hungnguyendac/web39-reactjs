import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../reducers/counterReducerSlice";

const Counter = () => {

    // Lay 1 gia tri bat ky trong store
    const number = useSelector((state) => state.counterReducerSlice);
    console.log(number);
    
    // Gui gia tri di
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(1))
    };

    const handleDecrement = () => {
        dispatch(decrement(1))
    };

    return (
        <>
            <button onClick={handleIncrement}>Increment +</button>
            <button onClick={handleDecrement}>Decrement -</button>

            <h1>{number.value}</h1>
        </>
    );
};

export default Counter;
