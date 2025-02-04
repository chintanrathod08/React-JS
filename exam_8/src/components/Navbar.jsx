import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Stform'}>Student Form</Link></li>
            <li><Link to={'/Stlist'}>Student List</Link></li>
            <li><Link to={'/Stdetails'}>Student Details</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
