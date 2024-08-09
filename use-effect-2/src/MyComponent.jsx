import React, {useState, useEffect} from 'react'

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);




    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
}


export default MyComponent