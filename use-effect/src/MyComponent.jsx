import React, {useState, useEffect} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
       // `My Counter Program`; 

       return () => {
        //SOME CLEANUP CODE
       }

    }, [count, color]);  // [] only when the component mounts

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }

    function subtractCount(){
        setCount(prevCount => prevCount - 1);
    }

    function changeColor(){
        setColor(prevColor => prevColor === "green" ? "red" : "green")
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>)
}


export default MyComponent