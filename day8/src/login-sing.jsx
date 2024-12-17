

import { useState } from "react";

function Form(){
    var [flip,setFlip] = useState("hide");
    var [user,setUser] = useState("");
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");
    var [arr,setArr] = useState([]);
    var [eLogin,setElogin] = useState("");
    var [passLogin,setPaslogin] = useState("");
    var [empty,setEmpty] = useState([])

    function Data(){
        var obj = {
            user,
            email,
            password
        }
        
        setArr([...arr,obj])

        alert("Data Added")
        console.log(arr);
        

        setEmpty([...empty, empty.length + 1])

        setEmail("")
        setUser("")
        setPassword("")

        setFlip("hide")


    }   

    function Matchdata(){
        var match = arr.filter((el)=>{
           if(el.email == eLogin && el.password == passLogin){
            alert("Login Successfull...")
           }else{
            alert("Login Unsuccessfull...")
           }  
        })
    }

    

    return(<div>
        {flip == "hide" ? <div>
            <h1>Login</h1> <br />
            <input type="text" placeholder="Enter e-mail" onChange={(e)=> setElogin(e.target.value)} /><br /><br />
            <input type="text" placeholder="Enter password" onChange={(e)=> setPaslogin(e.target.value)} /><br /><br />
            <button onClick={Matchdata} >Login</button><br /><br />
            <span onClick={()=> setFlip("show")} >Create An Account..!</span>
        </div> 
        
    
    
        : <div>
            <h1>SignUp</h1> <br />
            <input type="text" placeholder="Enter username" onChange={(e)=> setUser(e.target.value) } /><br /><br />
            <input type="text" placeholder="Enter e-mail" onChange={(e)=> setEmail(e.target.value) } /><br /><br />
            <input type="text" placeholder="Enter password" onChange={(e)=> setPassword(e.target.value) } /><br /><br />
            <button onClick={Data} >SignUp</button><br /><br />
            <span onClick={()=> setFlip("hide")} >Already An Account..!</span>
        </div>
    }
    </div>
    );
}   

export default Form