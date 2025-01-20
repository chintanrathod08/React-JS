import React from 'react'
import {  useSelector } from 'react-redux'

function Home() {

  const data = useSelector((st)=>st.LoginReducer)

  // const dispatch = useDispatch()



  return (
    <div>
      Welcome to My Webpage
      <h1></h1>

    </div>
  )
}

export default Home
