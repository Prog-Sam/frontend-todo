import { useState } from "react";

// Normally, one form is used for updating and saving, but the siuation here is different
const UpdateTodoForm = ({ data, setEditable, onUpdate }) => {
    // created a local todo state to mutate and send to the database later
    const [todo, setTodo] = useState({ ...data });

    const handleSubmit = async (e) => {
        // To Avoid page reload
        e.preventDefault();

        //Calling the database
        onUpdate(todo);
        // Closing Form
        setEditable(false);

    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <div className="p-2 flex-fill align-self-center">
                {
                    <input
                        value={todo.task}
                        onChange={(e) => setTodo({ ...todo, [e.target.name]: e.target.value })}
                        id="task"
                        type="text"
                        name="task"
                        placeholder="New Todo"
                        className='form-control'
                    />
                }
            </div>
            {
                <>
                    <div className="p-2">
                        <button className='btn btn-success'>Save</button>
                    </div>
                    <div className="p-2">
                        <button onClick={() => setEditable(false)} className='btn btn-danger'>Close</button>
                    </div>
                </>
            }
        </form>
    );
}

export default UpdateTodoForm;