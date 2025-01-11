import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div>
      <header>
           <nav>
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/Product"}>Product</Link></li>
              <li><Link to={"/Signup"}>Signup</Link></li>
              <li><Link to={"/Login"}>Login</Link></li>
            </ul>
           </nav>
      </header>
    </div>
  )
}

export default Navbar