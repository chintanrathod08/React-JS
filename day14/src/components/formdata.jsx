

function Formdata(props){
  return(<>
  {props.cr.map((el)=>{
    return <div>
      <h1>{el.user}</h1>
      <h1>{el.course}</h1>
      <h1>{el.language.join("-")}</h1>
      <h1>{el.hobbies.join("-")}</h1>
    </div>
  })}
    </>
  );
}
  
export default Formdata
