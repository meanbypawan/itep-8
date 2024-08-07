import { useContext } from "react";
import Third from "./Third";
import { CounterContext } from "../App";

function Second(){
    const {counter,setCounter} = useContext(CounterContext);
    return <>
      <h3>Second Component...</h3>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      <Third/>
    </>
}

export default Second;