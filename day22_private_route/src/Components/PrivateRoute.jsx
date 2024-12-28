import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {

  return (
    <div>
        { localStorage.getItem("isLogin") ? children : <Navigate to={"/Login"} /> }
    </div>
  )
}

export default PrivateRoute