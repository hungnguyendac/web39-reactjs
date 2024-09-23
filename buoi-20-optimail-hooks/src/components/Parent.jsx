import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Up count</button>
            <Child/>
        </>
    );
};

export default Parent;
