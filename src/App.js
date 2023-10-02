import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './Components/TodoList';
import NewTodoList from './NewComponents/NewTodoList';
function App() {
  const state = useSelector(state => ({...state}))

  return (
    <div className="App">
      {/* <TodoList/> */}
      <NewTodoList />
    </div>
  );
}

export default App;
