import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
          <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnltCxcigynIxSZxVZ98tAoXeck8OZ1TQ-g&s" alt="" width="150px" />
            </div>

            <nav>
              <ul>
                <li><Link to={"/"} >Home</Link></li>
                <li><Link to={"/product"} >Product</Link></li>
                <li><Link to={"/productlist"} >Productlist</Link></li>
                <li><Link to={"/signUp"} >SignUp</Link></li>
                <li><Link to={"/login"} >Login</Link></li>
              </ul>
            </nav>

        </header>
    </>
  )
}

export default Navbar
