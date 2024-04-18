// This Component will house new todo's form and the list of todos
import { useEffect, useState } from 'react';
import { getTodos, removeTodo, updateTodo } from '../services/todoService';
import '../App.css';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
    //Initializng state
    const [todos, setTodos] = useState([]);

    // Added function here to make this method accessible later for updating the list
    const populateTodos = async () => {
        const { data } = await getTodos();
        setTodos(data);
    }
    //Populating state
    useEffect(() => {
        populateTodos();
    }, [])

    // Adding Event Handlers
    const handleDelete = async (id) => {
        const { data } = await removeTodo(id);
        setTodos(data);
    }

    const handleUpdate = async (todo) => {
        const { data } = await updateTodo(todo);
        setTodos(data);
    }

    // Adding the mark up
    // It shows both the new todos form and list
    return (
        <div className='col-8 back-ground-level-1'>
            <h1>Todo List</h1>
            <h5>A Simple Todo List</h5>
            <h6>NOTE: CLICK THE TASK NAME IF YOU WANT TO MARK IT FINISHED</h6>
            <hr />
            {todos.length > 0 && todos.map((todo) => (
                <Todo
                    todo={todo}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            ))}
            <hr />
            <NewTodoForm refreshTodos={populateTodos} />
        </div>
    );
}

export default TodoList;