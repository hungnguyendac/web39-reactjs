import React, { memo } from "react";

const Child = () => {
    console.log("re-render");
    
    return <h1>This is Child</h1>;
};

export default memo(Child);
