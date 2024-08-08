import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducer/todosSlice';
import TodoForm from './TodoForm';

const TodoItem = ({ todo }) => {
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id));
    };
    return (
        <div>
            {editMode ? (
                <TodoForm
                    editMode={true}
                    existingTodo={todo}
                    onCancel={() => setEditMode(false)}
                />
            ) : (
                <div>
                    <span>{todo.text}</span>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default TodoItem