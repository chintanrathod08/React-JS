import './App.css'
import Product from "./components/product";

function App(){
  

  return(<div className="main w-[100%] h-[auto] grid grid-cols-4 gap-5 p-[2%]">
       <Product/>
  </div>);
}

export default App