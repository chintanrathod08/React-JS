import { useState } from "react";
import './App.css'


function Form(){
    var [flip,setFlip] = useState("hide");
    var [user,setUser] = useState("");
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState(""); 
    var [arr,setArr] = useState([]);
    var [elogin,setElogin] = useState("");
    var [passlogin,setPassLogin] = useState("")
    var [empty,setEmpty] = useState([])

    function AllData(){
        var obj = {
            user,
            email,
            password
        }

        setArr([...arr,obj])
        alert("Data Added Successfully...!")

        setEmpty([...empty, empty.length + 1])

        setElogin("")
        setPassLogin("")
        setUser("")
        setEmail("")
        setPassword("")

        setFlip("hide")

    }

    function Matchdata(){
        var match = arr.filter((el)=>{
            if(el.email == elogin && el.password == passlogin ){
                alert("Login Successfull...!")
            }else{
                alert("Login Unsuccessfull..!")
            }
        })
    }
    
    
    console.log(arr);

    return(<div className="w-[100%] h-[100vh]  bg-[#9173BD] flex justify-center items-center ">
         <div className="section-1 w-[380px]  h-[500px]  bg-[white]  border rounded-[15px] flex justify-center items-center ">
            
            {flip == "hide" ?  
            
            <div>
            <center><h1 className="text-[25px] decoration-2 font-semibold">Login</h1></center> <br />
              <label htmlFor=""><i class="ri-mail-line"></i> E-mail :</label><br />
             <input id="int" type="text" placeholder="Enter e-mail ID" onChange={(e)=>setElogin(e.target.value)}  /> <br /><br />
            
              <label htmlFor=""><i class="ri-lock-password-line"></i> Password :</label><br />
              <input id="int" type="text" placeholder="Enter password"  onChange={(e)=>setPassLogin(e.target.value)} /> <br /><br />
                <button id="btn" onClick={Matchdata}>Login</button> <br /><br />
                
                <span id="ss1" onClick={()=>setFlip("show")} >Create an Account..!</span>
            </div> 
            
            
            : <div>
             <center> <h1 className="text-[25px] decoration-2 font-semibold">Sign-Up</h1> <br /> </center>
             <label htmlFor=""><i class="ri-user-3-line"></i> User :</label><br />
              <input id="int" type="text" placeholder="Enter username"  onChange={(e)=>setUser(e.target.value)} /> <br /><br />

              <label htmlFor=""><i class="ri-mail-line"></i> E-mail :</label><br />
              <input id="int" type="text" placeholder="Enter e-mail ID" onChange={(e)=>setEmail(e.target.value)}  /><br /><br />

              <label htmlFor=""><i class="ri-lock-password-line"></i> Password :</label><br />
              <input id="int" type="text" placeholder="Enter password"  onChange={(e)=>setPassword(e.target.value)} /><br /><br />    
              <button id="btn" onClick={AllData}>SignUp</button><br /><br />
             
              <span  id="ss1" onClick={()=>setFlip("hide")} >Already an Account..!</span>
            </div> }
        </div>
        
        </div>
        );
}

export default Form