// import { useState } from "react";

// import Productlist from "./formsubmit";

// function Form(){

//     const [state,SetState] = useState({
//         title : "",
//         image : "",
//         price : 0
//     })

//     const [arr,setArr] = useState([])
//     const handleChange = (e)=>{
//         const {name,value} = e.target
//         SetState({...state,[name] : value})
//     }   

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         setArr([...arr,state])
//     }
    
//     console.log(arr)
    

//     return(
//         <>
//         <center><br /><br />
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text" name="title" placeholder="Enter title" onChange={handleChange} /><br /><br />
//             <input type="text" name="image" placeholder="Enter img URL" onChange={handleChange} /><br /><br />
//             <input type="text" name="price" placeholder="Enter Price" onChange={handleChange} /><br /><br />
//             <input type="Submit" />
//         </form>
//         <Productlist arr={arr}/>
//         </center>
//         </>
//     );

// }

// export default Form

import { useState } from "react"
import Formsubmit from "./formsubmit"


function Form() {

    let [data, setdata] = useState({
        img: "",
        title: "",
        price: 0

    })
    let [arr, setarr] = useState([])
    

    function handel(e) {


        let { name, value } = e.target

        console.log(name)
        setdata({...data,[name]:value})

        console.log(data);


    }


    function sub(e) {
        e.preventDefault()

        setarr([...arr,data])
        console.log(arr);
        
        setdata({
            img:""
        })

        
        
    }
    
    
    return <>

        <form action="" onSubmit={sub}>

            <input type="text"  value={data.img }  name="img" onChange={handel} /> <br /><br />
            <input type="text"    value={data.title } name="title" onChange={handel} /> <br /><br />
            <input type="text"    value={data.price } name="price" onChange={handel} /> <br /><br />

            <input type="submit"  onClick={()=>setem("")} />
        </form>

        <Formsubmit arr={arr}/>
    </>
}
export default Form