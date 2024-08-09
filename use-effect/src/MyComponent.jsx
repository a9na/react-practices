import React, {useState, useEffect} from 'react'

function MyComponent(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = // `Count: ${count}`
        `My Counter Program`; 
    }, []);  //title only updates once

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
    </>)
}


export default MyComponent