import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h2>{count}</h2>
            <Child handleIncrement={handleIncrement} />;
        </>
    );
};

export default Parent;
