import { useDispatch, useSelector } from 'react-redux'
import { DEC1, INC1 } from '../redux/actionType'


function Counter1() {

  const data = useSelector((st)=>st.count1)
  console.log(data);
  
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>Counter 1 :- {data}</h1>
      <button onClick={()=>dispatch({type : INC1})}>+</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>dispatch({type : DEC1})} disabled={data <= 0}>-</button>
    </div>
  )
}

export default Counter1