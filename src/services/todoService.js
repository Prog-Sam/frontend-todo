import http from './httpService';

export async function getTodos() {
    const todos = await http.get(`/todos`);

    return todos;
}

export async function getTodo(id) {
    const todo = await http.get(`/todos/${id}`);

    return todo;
}

export async function saveTodo(todo) {
    let localTodo = { ...todo };
    delete localTodo['id'];

    let todoInDb = await http.post(`/todos`, localTodo);
    return todoInDb;
}

export async function updateTodo(todo) {
    let localTodo = { ...todo };
    delete localTodo['id'];

    let todos = await http.put(`/todos/${todo.id}`, localTodo);
    return todos;
}

export async function removeTodo(id) {
    let todos = await http.delete(`/todos/${id}`);
    return todos;
}

//An example of my Axios restful convention-ready service.
// For Contacting the backend using http methods.