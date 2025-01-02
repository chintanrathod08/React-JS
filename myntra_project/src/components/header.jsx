import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='w-[100%] h-[80px] flex justify-evenly items-center'>

            {/* logo.............. */}
           <div className="logo w-[10%] h-[100%]  flex justify-center items-center">
          <Link to={"/"}> <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256"  className='w-[70px]' alt="" />
          </Link>
           </div>

            {/* nav-bar.......... */}
           
           <nav className='w-[40%] h-[100%]  flex justify-center items-center' >

            <ul className='w-[100%] h-[100%] flex justify-evenly  items-center'>
            
                <li><Link to={"/"} ></Link></li>
                <li><Link to={"/men"} >Men</Link></li>
                <li><Link to="/women" >Women</Link></li>
                <li><Link to={"/Kids"} >Kids</Link></li>
                <li><Link to="/home_living" >Home & Living</Link></li>
                <li><Link to="/beauty" >Beauty</Link></li>
                <li><Link to="/studio" >Studio</Link></li>
             </ul>
           
           </nav>


        { /* serch-bar............. */ }
       
        <div className="search border bg-[#F5F5F6] w-[24%] h-[40px] flex justify-between items-center  rounded-[5px]">
           
           
            <div className='w-[15%] h-[100%] flex justify-center items-center'>
            <i class="ri-search-line text-[18px] text-[dimgray]"></i>
            </div>

            <div className='w-[85%] h-[100%] flex items-center' >
            <input className='w-[100%] text-[13px] bg-[#F5F5F6] h-[100%] ps-3 rounded-[5px]' type="search" placeholder='Search for products, brand and more' />
            </div>
       
        </div>

        {/* .login-cart */}

        <div className='w-[15%]  h-[100%] text-[dimgray] flex justify-evenly items-center'>
            <div className='h-[100%] pt-5'>
           <center> <Link to={"/login"} > <i class="ri-user-line  text-[20px]"></i> </Link> </center>
             <p className='text-[13px]'>Profile</p>
            </div>
            <div className='h-[100%] pt-5'>
           <center> <i class="ri-heart-line text-[20px]"></i></center>
            <p className='text-[13px]'>Whishlist</p>
            </div>
            <div className='h-[100%] pt-5  '>
           <center> <i class="ri-shopping-bag-4-line text-[20px]"></i></center>
            <p className='text-[13px]'>Bag</p>
            </div>
            
        </div>
    
        </header>   
    </>
  )
}

export default Header
