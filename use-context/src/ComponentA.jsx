import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();

function ComponentA(){

    const [user, setuser] = useState("anaiscoding");

    return( <div className="box">
                <h1>ComponentA</h1>
                <h2>{`Hello ${user}`}</h2>
                <ComponentB />
            </div>)
}

export default ComponentA