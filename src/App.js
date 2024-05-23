import Form from "./Form";
import {useEffect, useRef } from "react";
import loading from './assets/loading.gif'
function App() {
  let ref =useRef();
  useEffect(()=>{
    let el = ref.current;
      setTimeout(()=>{
        el.style.display = "none"
      },2000);    
  },[])
  return (
    <div>
          <div ref={ref} className=" h-screen flex items-center justify-center h-screen w-screen fixed z-10 bg-white">
        <img className=" scale-[0.35]" src={loading} alt="load"></img>
        </div>
      <Form />
    </div>
  );
}

export default App;