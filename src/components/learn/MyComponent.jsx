//JSX : 1 parent
//fragment

import './style.css'
    
const MyComponent = () => {
    // const tin = 25;  number
    // const tin = "hoc"; string 
    // const tin = true; boolean
    // const tin = undefined; 
    // const tin = null;
    // const tin = {
    //     name : "tin",
    //     tuoi : 22
    // };
    const tin = [1,2,3]

    return (
        <>
            <h2>{JSON.stringify(tin)} Hello asa</h2>
            <h2>{console.log("adadad")}</h2>
            <h2 className="child" style={
                {color: "red"}
            }>Hello 2</h2>
      </>
    );
}

export default MyComponent