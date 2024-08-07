import { useContext } from "react";
import { CounterContext, MessageContext } from "../App";

function Third(){
    let {message} = useContext(MessageContext);
    const {counter,setCounter} = useContext(CounterContext);
    return <>
      <h3>Third Component...{message}</h3>
      <button onClick={()=>setCounter(counter+1)}>{counter}</button>
    </>
}

export default Third;