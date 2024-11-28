import {useState} from "react";
import './App.css'
import Header from "./header";
import Footer from "./footer";

function Form(){
    const [flip,setFlip] = useState("hide");
    const [user,setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [arr,setArr] = useState([]);
    
    const [emailLogin,setElogin] = useState("");
    const [passLogin,setPasslogin] = useState("");


    function Alldata(){
        var obj = {
            user,
            email,
            password
        }   

        setArr([...arr,obj])
        setFlip("hide")
        
    }

    function matchdata(){
       var match = arr.filter((ele)=>{
            if(ele.email == emailLogin && ele.password == passLogin ){
                alert("Login Successfull...")
            }
            else{
                alert("Login Unsuccessfull...")
            }
        })
    }

    console.log(arr);   

    return( <div className="main"><Header/> 


         <div className="section-1 w-[100%] h-[auto] p-[5%] bg-[#F1F3F6] flex justify-center items-cneter">

            <div className="sec-1 w-[55%] bg-[white] shadow-md-[black] h-[500px] rounded-[20px]  flex justify-center items-center">


            <div className="rounded-l-[10px]  w-[50%] h-[100%]  bg-[#2874F0] ps-[3%] pt-[3%]">
                    <h1 className="text-[white]">Login</h1> 
                    <br />
                    <p className="text-[white]">Get access to your
                    Orders, Wishlist and <br />
                    Recommendations.
                    </p>    

                  <center>  <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" className="mt-[40%]" alt="" /></center>
                    
            </div>

            <div className="w-[50%] h-[100%] ps-[5%]">
            {flip == "hide" ? <div className="pt-[5%]">
            <h3 className="text-[20px] decoration-1">Login</h3> <br />
            <input type="text" className="w-[90%] border-b-2 ps-2" placeholder="Enter your e-mail" onChange={(el)=> setElogin(el.target.value)} /><br /><br />
            <input type="text" className="w-[90%] border-b-2 ps-2" placeholder="Enter your password" onChange={(el)=> setPasslogin(el.target.value)}/><br /><br />
            <button onClick={matchdata} className="w-[90%] bg-[#FB641B] h-[45px] rounded-[10px] text-[white]">Login</button><br /><br />
            <span onClick={()=> setFlip("show")} className="ss1"> Create An Account !</span>
            </div>
            
        :   <div className="pt-[5%]"> 
            <h3 className="text-[20px] decoration-1	" >SignUp</h3> <br />
            <input type="text" className="w-[90%] border-b-2 ps-2" placeholder="Enter username" onChange={(e)=> setUser(e.target.value) } /><br /><br />
            <input type="text" className="w-[90%] border-b-2 ps-2"  placeholder="Enter your e-mail" onChange={(e)=> setEmail(e.target.value)} /><br /><br />
            <input type="text" className="w-[90%] border-b-2 ps-2"  placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)} /><br /><br />
            <button onClick={Alldata} className="w-[90%] h-[45px] bg-[#FB641B] rounded-[10px] text-[white]">SignUp</button><br /><br />
            <span onClick={()=> setFlip("hide")} className="ss1">Already An Account !</span>

            </div>}
            </div>

             </div>
       
        </div>
  

        <Footer/>

        </div>
    );

}

export default Form