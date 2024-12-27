import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <header className=''>
          <div className="logo">
            <img src="https://pbs.twimg.com/media/EtZYf1FWYAMmtHj.jpg" alt="" width="90%" />
          </div>
           <ul>
             <li> <Link to={"/"} >Home</Link> </li>
             <li> <Link to={"/Product"} >Product</Link></li>
             <li> <Link to={"/Signup"} >Signup</Link></li>
             <li> <Link to={"/Login"} >Login</Link></li>
            </ul>
        </header>
    </div>
  )
}

export default Navbar
