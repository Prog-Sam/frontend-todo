import '../css/Todo.css';

const Todo = ({ todo, onUpdate, onDelete, onChange, editable }) => {
    return (<div key={todo.id} className="d-flex justify-content-start border border-secondary">
        <div className="p-2 flex-fill align-self-center">
            {
                editable ?
                    (
                        <input
                            className="form-control"
                            type='text'
                            value={todo.task}
                            onChange={onChange}
                        />
                    ) :
                    (
                        <h4
                            onClick={() => onUpdate({ ...todo, ['completed']: !todo.completed })}
                            className={todo.completed ? "Todo-task completed" : "Todo-task"}
                            style={{ cursor: 'pointer' }}
                        >{todo.task}</h4>
                    )
            }
        </div>
        {!editable &&
            <>
                <div className="p-2">
                    <button className='btn btn-warning'>Edit</button>
                </div>
                <div className="p-2">
                    <button onClick={() => onDelete(todo.id)} className='btn btn-danger'>Delete</button>
                </div>
            </>
        }
        {
            editable &&
            <div className="p-2">
                <button className='btn btn-success'>Save</button>
            </div>
        }
    </div>);
}

export default Todo;