function Formsubmit(props) {
 
    return (
      <>
      <div>
      {props.arr.map((e)=>{
        return <div>
          <img src={e.img} alt="" />
          <p>{e.title}</p>
          <p>{e.price}</p>
        </div>
      })}
      </div>
      </>
    )
  }

export default Formsubmit