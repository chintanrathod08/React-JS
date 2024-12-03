
function Productlist(props){
    return( props.data.map((el)=>{
        return <div key={el.id} className="card h-[450px] border rounded-[10px]">
         <div className="w-[100%] h-[65%] flex justify-center items-center"><img src={el.image} alt="" id="cardimg" /></div>
         <div className="w-[100%] h-[30%] pt-[10%] ps-[5%] pe-[7%]">
           <h2 className="text-[15px]">{el.title}</h2>
           <p className="text-[17px]">{el.category}</p>
           <p className="text-[17px] text-[red]">${el.price}/-</p>
         </div>
      </div>
      })
    );
}

export default Productlist