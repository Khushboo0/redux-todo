import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <Todos/>
    </div>
  );
}   

export default App;
