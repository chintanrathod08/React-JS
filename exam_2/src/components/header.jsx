function Header(){
    return(<div className="bigheader w-[100%] h-[85px] flex justify-center items-center"> 
        <header id="head" className='w-[85%] h-[100%]  flex justify-around items-center'>
           
            <div className="logo w-[12%] h-[100%] flex justify-center items-center"><img src="https://cdn.masaischool.com/masai-website/Masai_Logo_dark_web_b21aab8c62.webp" alt="" />
            </div>

            <select name="" id="" className="w-[150px] ps-[10px] h-[42px] bg-[#D6E2FA] rounded-[10px]">
                <option value="">COURES</option>
                <option value="">Software Development</option>
                <option value="">Data Analytics</option>
                <option value="">IIT Ropar</option>
                <option value="">IIT Guwahati</option>
                <option value="">IIT Mandi</option>

            </select>

            <nav className="w-[50%] h-[100%]">
                <ul className="w-[100%] h-[100%] flex justify-between items-center">
                    <li> <a href="" id="a" className="font-medium hover:text-[gray]" >SCHOLARSHIP</a> <i class="ri-arrow-drop-down-line text-[20px]"></i></li>
                    <li> <a href="" id="a" className="font-medium hover:text-[gray]" >SUCCESS STORIES</a> <i class="ri-arrow-drop-down-line text-[20px]"></i></li>
                    <li> <a href="" id="a" className="font-medium hover:text-[gray]" >EVENTS</a> <i class="ri-arrow-drop-down-line text-[20px]"></i></li>
                    <li> <a href="" id="a" className="font-medium hover:text-[gray]" >HIRE FORM US</a> <i class="ri-arrow-drop-down-line text-[20px]"></i></li>
                    <li> <a href="" id="a" className="font-medium hover:text-[gray]" >FEES</a> <i class="ri-arrow-drop-down-line text-[20px]"></i></li>
                </ul>
            </nav>

            <button className="w-[120px] h-[40px] rounded-[10px] bg-[#ED0331] text-[white] hover:bg-[red]" id="bt1">REGISTER</button>
        </header>
        </div>
        );
}
export default Header