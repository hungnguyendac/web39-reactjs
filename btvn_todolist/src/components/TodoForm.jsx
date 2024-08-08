import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../reducer/todosSlice';

const TodoForm = ({ editMode, existingTodo, onCancel }) => {
    const [text, setText] = useState(editMode ? existingTodo.text : "");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            dispatch(editTodo({ id: existingTodo.id, text }));
        } else {
            dispatch(addTodo({ id: Date.now(), text }));
        }
        setText("");
        if (editMode) onCancel();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type="submit">{editMode ? "Update" : "Add"}</button>
            {editMode && <button onClick={onCancel}>Cancel</button>}
        </form>
    );
};

export default TodoForm