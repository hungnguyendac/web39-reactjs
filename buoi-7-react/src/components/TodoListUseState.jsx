import React, { useState } from "react";

const TodoListUseState = () => {

    const [todos, setTodos] = useState([]);


    const handleTask = () => {
        // Tạo mảng mới, sao chép lại mảng cũ và thêm giá trị "New Task" mỗi lần bấm
        const newTask = [...todos, "New Task"]
        setTodos(newTask);
    }

    return (
        <>
            <div>TodoListUseState</div>
            <button onClick={handleTask}>Add Task 1</button>
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

export default TodoListUseState;
