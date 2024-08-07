import React, {useState} from 'react'


function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date(),getFullYear());
    const [carMake, setCarMake] = useState("");
    
    return(<></>)

}


export default MyComponent