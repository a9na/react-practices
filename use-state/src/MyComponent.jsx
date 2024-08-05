import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

/*   const updateName = () => {
        name = "Ana";
        console.log(name);
    }
*/

    const updateName = () => {
        setName("Spongebob");
}

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

            </div>)
}


export default MyComponent