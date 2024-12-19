import React from 'react'

function Productlist({alldata,hlDelete,hlEdit,alldata2,sort}) {
   return (<><br /><br />
        <center>
        <div  className='w-[80%] h-[auto]  h-[auto] border rounded-[10px] grid grid-cols-4 gap-4 p-5'>
       
        { sort==false ? alldata.map((el)=>{
            return(  
               
                
                <div key={el.id} className='card mt-[10px] border rounded-[10px] p-[10px] ' >
                
                <img src={el.imgURL} alt="" width={"250px"} height={"300px"} className='rounded-[10px]' /> 
                
                <h2 className='text-[20px] mt-3'>{el.name}</h2>
                
                <p className=''>&#8377;{el.price}</p>
                
                <p className='text-[15px] text-[dimgray] mt-[5px]'>{el.des}</p> <br />
                
                <button className='w-[100px] h-[28px] rounded-[10px] bg-[orangered] text-[white] cursor-pointer'  onClick={()=>hlDelete(el.id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <button className='w-[100px] h-[28px] rounded-[10px] bg-[orangered] text-[white] cursor-pointer'  onClick={()=>hlEdit(el.id)}>Edit</button>
                
                </div>
                
                  )


        }) : alldata2.map((el)=>{
            return( 
                
                <div key={el.id} className='card mt-[10px] border rounded-[10px] p-[10px] ' >
 
                <img src={el.imgURL} alt="" width={"250px"} height={"300px"} className='rounded-[10px]' /> 
                
                <h2 className='text-[20px] mt-3'>{el.name}</h2>
                
                <p className=''>&#8377;{el.price}</p>
                
                <p className='text-[15px] text-[dimgray] mt-[5px]'>{el.des}</p> <br />
                
                <button className='w-[100px] h-[28px] rounded-[10px] bg-[orangered] text-[white] cursor-pointer'  onClick={()=>hlDelete(el.id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <button className='w-[100px] h-[28px] rounded-[10px] bg-[orangered] text-[white] cursor-pointer'  onClick={()=>hlEdit(el.id)}>Edit</button>
                
                </div>
                
                  )

        }) }

        </div>
        </center>
  </>);
}

export default Productlist