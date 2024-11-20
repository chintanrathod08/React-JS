import { useState } from "react"
import './App.css'

function App() {
  var [name,setstate] = useState("Chintan Rathod")
  var [grid,setstate] = useState("7303")
  var [date,setstate] = useState("24-11-2023")
  var [branch,setstate] = useState("RWR1 (Kalawad Road)")
  var [course,setstate] = useState("Front End")
  var [nom,setstate] = useState("9033159452")
  var [duration,setstate] = useState("12 Month")
  return (
    <center>
     <div className="idcard">
         <h1>ID CARD</h1>
         <h3>Name : {name}</h3>
        <h3>GR ID : {grid}</h3>
        <h3>Joining Date : {date}</h3>
        <h3>Branch Name : {branch}</h3>
        <h3>Course Name : {course}</h3>
        <h3>Mobile No. : {nom}</h3>
        <h3>Course Duration : {duration}</h3>
    </div>
    </center>
  );
}

export default App;
