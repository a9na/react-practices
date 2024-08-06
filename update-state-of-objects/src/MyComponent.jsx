import React, {useState} from 'react'


function MyComponent() {

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year}/>
    </div>)

}


export default MyComponent