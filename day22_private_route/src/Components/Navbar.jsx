import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <header>
            <ul>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={"/Product"} >Product</Link></li>
                <li><Link to={"/SignUp"} >SignUp</Link></li>
                <li><Link to={"/Login"} >Login</Link></li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar