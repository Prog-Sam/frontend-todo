import { useEffect, useState } from 'react';
import '../css/Todo.css';
import UpdateTodoForm from './UpdateTodoForm';

const Todo = ({ todo, onUpdate, onDelete }) => {
    const [editable, setEditable] = useState(false);

    return (<div key={todo.id} className="d-flex justify-content-start border border-secondary">
        {!editable &&
            <>
                <div className="p-2 flex-fill align-self-center">
                    {
                        <h4
                            onClick={() => onUpdate({ ...todo, ['completed']: !todo.completed })}
                            className={todo.completed ? "Todo-task completed" : "Todo-task"}
                            style={{ cursor: 'pointer' }}
                        >{todo.task}</h4>
                    }
                </div>
                <div className="p-2">
                    <button className='btn btn-warning' onClick={() => setEditable(true)}>Edit</button>
                </div>
                <div className="p-2">
                    <button onClick={() => onDelete(todo.id)} className='btn btn-danger'>Delete</button>
                </div>
            </>
        }
        {editable &&
            <UpdateTodoForm data={todo} setEditable={setEditable} onUpdate={onUpdate} />
        }
    </div>);
}

export default Todo;