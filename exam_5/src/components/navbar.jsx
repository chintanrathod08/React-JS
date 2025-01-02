import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <header>
          <div className="logo">
            <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" alt="" width="130px" />
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
