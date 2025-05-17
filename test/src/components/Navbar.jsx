import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    
    return (
        <div>
            <NavLink className={(ele) => {return ele.isActive?"red" : "green"}} to='/'>Home</NavLink>
            <br></br>
            <NavLink className={(ele) => {return ele.isActive?"red" : "green"}} to='/login'>Login</NavLink>
        </div>
    )
}

export default Navbar