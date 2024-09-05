
import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData.jsx"
import TodoNew from "./components/todo/TodoNew.jsx"
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {

  const [todoList, settodoList] = useState([
    { id:1, name: "Tin" },
    { id:2, name: "Tin"}
  ])

  const fullname = "Tin";
  const age = 22;
  const data = {
    address :"Quang Nam",
    country :"VietNam"
  }
  const addNewTodo = (name)=>{
    alert(`call me ${name}`)// backtick
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
          todoList={todoList}
        />
        <div className="todo-image">
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    )
  
}

export default App
