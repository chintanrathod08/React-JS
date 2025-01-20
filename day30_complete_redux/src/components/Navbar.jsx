import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/product'} >Product</Link></li>
            <li><Link to={'/signup'} >SignUp</Link></li>
            <li><Link to={'/login'} >Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
