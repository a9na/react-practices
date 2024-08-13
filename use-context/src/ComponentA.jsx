import { useState } from 'react'
import ComponentB from './ComponentB.jsx'

function ComponentA(){

    const [user, setuser] = useState("anaiscoding");

    return( <div className="box">
                <h1>ComponentA</h1>
                <ComponentB />
            </div>)
}

export default ComponentA