import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <header className='w-[100%] h-[100px]  flex justify-evenly items-center'>
          
          <div className="logo w-[12%] h-[100px]  flex justify-center items-center">
            <img src="https://pbs.twimg.com/media/EtZYf1FWYAMmtHj.jpg" alt="" width="250px"/>
          </div>
       
        <nav className='w-[50%]  h-[100px] '>
           
            <ul className='w-[100%] h-[100%] flex justify-evenly items-center'>
                <li> <Link to="/" className='text-[#927af6]' >Home </Link> </li>
                <li> <Link to="/about" className='text-[#927af6]' >About</Link> </li>
                <li> <Link to="/product" className='text-[#927af6]' >Product</Link> </li>
                <li> <Link to="/cart" className='text-[#927af6]' >Cart</Link></li>
            </ul>
        
        </nav>

       <div className='w-[120px] h-[35px] rounded-[10px] bg-[#927af6] text-[white] flex justify-center items-center shadow-md shadow-[#927af6]'>
            <Link to="/login">Login</Link> 
       </div>
       
        </header>
     </>
  )
}

export default Header