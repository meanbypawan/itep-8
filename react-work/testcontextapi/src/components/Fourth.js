import { useContext } from "react";
import { MessageContext } from "../App";
import First from "./First";

function Fourth(){
    let {message} = useContext(MessageContext);
    return <>
      <h3>Fourth Component...{message}</h3>
    </>
}

export default Fourth;