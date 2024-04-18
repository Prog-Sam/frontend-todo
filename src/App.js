import TodoList from './components/TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// The main App, better just put general things here like context and div markups.
// Avoid Pollution

function App() {

  return (
    <div className='back-ground-level-0 box' style={{ height: '10000px', width: '100%' }}>
      <div className="App center border border-secondary ">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
