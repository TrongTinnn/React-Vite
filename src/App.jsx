
import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData.jsx"
import TodoNew from "./components/todo/TodoNew.jsx"
import reactLogo from "./assets/react.svg";
const App = () => {
  const fullname = "Tin";
  const age = 22;
  const data = {
    address :"Quang Nam",
    country :"VietNam"
  }
  const addNewTodo = (name)=>{
    alert(`call me ${name}`)
  }
  // key: value;
    return (
      <div className="todo-container">
        <div className="todo-title">To do List </div>
        <TodoNew
               addNewTodo={addNewTodo}
          />
        <TodoData 
     
          name={fullname}
          age={age}
          data={data}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    )
  
}

export default App
