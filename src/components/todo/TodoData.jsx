const TodoData = (props) => {
    // props  la mot object
    // su dung destructuring
    const {name,age,data,todoList } = props;
    // const props.name= props;
    console.log(">>>>> props", props)
    return (
        <div className="todo-data">
            <div> My name is {name}</div>
        <div>Learning React</div>
            <div>Learning React</div>
            <div>{ JSON.stringify(todoList)}</div>
       </div>
    )
}
export default TodoData