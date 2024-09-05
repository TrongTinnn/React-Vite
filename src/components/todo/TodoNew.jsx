import { useState } from "react"


const TodoNew = (props) => {
   // console.log(">>>>>> props:", props)
    //const { addNewTodo } = props

    //useState hook (getter/setter)
    //setValueInput : function
    //destructuring array ( 1: bien , 2: ham(function))
    const [valueInput, setValueInput] = useState("Tin")


    // addNewTodo("tin")    //fire
    const handleClick = () => {
        console.log(">>>>>> check value ", valueInput)
    }
  


    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className="todo-new">
         
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />


            <button style={{ cursor: "pointer" }}
                onClick={handleClick}> Add </button>
                    
            
            <div>My input is {valueInput} </div>

          </div>
    )
}
export default TodoNew;