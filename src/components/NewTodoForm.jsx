import { useState } from "react";
import { saveTodo } from "../services/todoService";


//Schema for validation added here

const NewTodoForm = ({ refreshTodos }) => {
    //Initialize State
    const [todo, setTodo] = useState({ task: '', completed: false });

    const handleSubmit = async (e) => {
        //To Avoid page reload
        e.preventDefault();

        //Calling the database
        await saveTodo(todo);
        //Updating the the todo list
        refreshTodos();
        //Reinitializing state
        setTodo({ task: '', completed: false });
    }

    return (
        <form className='col-8 back-ground-level-1' onSubmit={handleSubmit} style={{ marginTop: '50px' }}>
            <h3 className='d-flex align-items-left' htmlFor="task">New todo</h3>
            <div className='d-flex'>
                <div className='p-2'>
                    <input
                        value={todo.task}
                        onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })}
                        id="task"
                        type="text"
                        name="task"
                        placeholder="New Todo"
                        className='d-flex form-control'
                    />
                </div>
                <div className='p-2'>
                    <button disabled={todo.task === ''} className='btn btn-primary'>Add Todo</button>
                </div>
            </div>
        </form>
    );
}

export default NewTodoForm;