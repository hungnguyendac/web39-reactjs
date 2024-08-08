import React from "react";
import TodoListUseState from "./components/TodoListUseState";
import TodoListUseReduce from "./components/TodoListUseReduce";
import ComponentA from "./components/ComponentA";
import { MyContext } from "./contexts/MyContext";

const App = () => {
    const a = "100 triệu"
    return (
        <MyContext.Provider value={a}>
            <TodoListUseState />
            <TodoListUseReduce />
            <ComponentA />
        </MyContext.Provider>
    );
};

export default App;
