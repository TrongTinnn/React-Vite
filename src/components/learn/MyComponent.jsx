//JSX : 1 parent
//fragment

import './style.css'
    
const MyComponent = () => {
    return (
        <>
            <h2>Hello asa</h2>
            <h2 className="child" style={
                {color: "red"}
            }>Hello 2</h2>
      </>
    );
}

export default MyComponent