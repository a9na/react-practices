

function List(){

    /*
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    fruits.sort();

    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return(<ul>{listItems}</ul>);
*/

    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name:"orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name));  //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name));  //REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories); //NUMERIC 

    /*If the result of a.calories - b.calories is negative, 
    it means a has fewer calories than b, so a should come before b.
    If the result is zero, it means both fruits have the same calorie count, 
    so their order relative to each other remains unchanged.
    If the result is positive, it means a has more calories than b, so a should come after b.
    */

    //fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC (DESCENDING)

    const lowCalFruits = fruits.filter(fruit.calories < 100);

    //const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);


    const highCalFruits = fruits.filter(fruit.calories >= 100);

    //const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp; <b>{lowCalFruit.calories}</b></li>);

    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp; <b>{highCalFruit.calories}</b></li>);


    return(<ul>{listItems}</ul>);




}

export default List
