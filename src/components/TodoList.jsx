import { useEffect, useState } from 'react';
import { getTodos } from '../services/todoService';
import '../App.css';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
    const [editableId, setEditableId] = useState(0);
    const [todos, setTodos] = useState([]);

    const populateTodos = async () => {
        const { data } = await getTodos();
        setTodos(data);
    }
    useEffect(() => {
        populateTodos();
    }, [])


    const handleChange = (event) => {
        console.log(event);
    }

    const handleDelete = (id) => {
        console.log(id);
    }


    const handleUpdate = (todo) => {
        console.log(todo);
    }

    return (
        <div className='col-8 back-ground-level-1'>
            <h1>Todo List</h1>
            <h5>A Simple Todo List</h5>
            <hr />
            {todos.length > 0 && todos.map((todo) => (
                <Todo
                    todo={todo}
                    onChange={handleChange}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                    editable={todo.id == editableId ? true : false}
                />
            ))}
            <TodoForm refreshTodos={populateTodos} />
        </div>
    );
}

export default TodoList;