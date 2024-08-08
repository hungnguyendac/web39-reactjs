import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
    // state: trạng thái hiện tại của todos
    // action: hành động được dispatch gửi lên
    // 2 biến là cú pháp của useReducer
    console.log(action.type);
    console.log(action.payload);
    
    switch (action.type) {
        case "add-Todo":
            return [...state, action.payload]
        default:
            throw new Error();
    }
}

const TodoListUseReduce = () => {

    // const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(reducer, []);

    const handleTask = () => {
        const newTask = "New Task 2";
        dispatch({
            type: "add-Todo",
            payload: newTask
        })
    }

    return (
        <>
            <div>TodoListUseReduce</div>
            <button onClick={handleTask}>Add Task 2</button>
            <ul>
                {todos.length > 0 &&
                    todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>;
                    })}
                {!todos.length > 0 && <p>Không tồn tại Task!</p>}
            </ul>
        </>
    );
};

export default TodoListUseReduce;
