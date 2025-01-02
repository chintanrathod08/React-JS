import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
                <li>
                    <Link to={"/signup"}>Signup</Link>
                </li>
                <li>
                    <Link to={"/product"}>Product</Link>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar