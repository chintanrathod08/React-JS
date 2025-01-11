import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function Privateroute({children}) {

  const data = useSelector((st)=>st) 
  console.log(data);
  
  return (
    <div>
      { data.isLogin ? children : <Navigate to="/Login"/>  }
    </div>
  )
}

export default Privateroute