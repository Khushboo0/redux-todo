import AddTodo from './component/AddTodo';
import Todos from './Todos';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
     <AddTodo/>
     <Todos/>
    </div>
  );
}   

export default App;
