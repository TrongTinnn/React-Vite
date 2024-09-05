const TodoNew = (props) => {
    console.log(">>>>>> props:", props)
    const { addNewTodo } = props

    // addNewTodo("tin")    //fire
    const handleClick = () => {
        alert("call me ")
    }
    // const handleOnChange = (event) => {
    //     console.log(">>>>> handleOnchange ", event.target.value )
    // }
    const handleOnChange = (name) => {
        console.log(">>>>> handleOnchange ", name )
    }
    return (
        <div className="todo-new">
            {/* <input type="text"
                onChange={handleOnChange}
            /> */}
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />


            <button style={{ cursor: "pointer" }}
            onClick={handleClick}> Add </button>
          </div>
    )
}
export default TodoNew;