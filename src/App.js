import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='back-ground-level-0 box' style={{ height: '100%', width: '100%' }}>
      <div className="App center border border-secondary ">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
