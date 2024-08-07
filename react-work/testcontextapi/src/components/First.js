import { useContext } from "react";
import Second from "./Second";
import { CounterContext } from "../App";

function First(){
    const {counter,setCounter} = useContext(CounterContext);
    return <>
      <h3>First Component..</h3>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
      <Second/>
    </>
}

export default First;