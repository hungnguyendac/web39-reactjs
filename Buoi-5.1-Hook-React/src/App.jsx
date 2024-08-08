import React, { useState } from "react";

const App = () => {

    const [name, setName] = useState(1);
    console.log(name);



    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => setName(name + 1)}>Increment</button>
        </>
    );
};

export default App;

// ----------------- Vế phải -----------------------
// useState() -> Hook trong React, dùng để định nghĩa 1 sate có tên là "name"
/* 
useState("Web39!") -> "Web39!" là giá trị ban đầu mình muốn gắn cho biến "name",
không để thì là undefined.

*/ 

// ----------------- Vế trái --------------------------
// name: Tên state mình tự định nghĩa
// setName: Phương thức để mình có thể cập nhật lại cái state "name", do mình tự định nghĩa.