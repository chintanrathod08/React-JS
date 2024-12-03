import { useEffect } from "react";
import { useState } from "react";
import './App.css'

function App(){
  const [arr,setArr] = useState([])
  
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>{
      return res.json()
    })
    .then((Res)=>{
      setArr(Res)
      console.log(arr);
    })
    .catch((Err)=>{
        console.log(Err);
    })
  },[])

  return(<div className="main w-[100%] h-[auto] grid grid-cols-4 gap-5 p-[2%]">
    {arr.map((el)=>{
      return <div className="card h-[450px] border rounded-[10px]">
       <div className="w-[100%] h-[65%] flex justify-center items-center"><img src={el.image} alt="" id="cardimg" /></div>
       <div className="w-[100%] h-[30%] pt-[10%] ps-[5%] pe-[7%]">
         <h2 className="text-[15px]">{el.title}</h2>
         <p className="text-[17px]">{el.category}</p>
         <p className="text-[17px] text-[red]">${el.price}/-</p>
       </div>
    </div>
    })}
  </div>);
}

export default App