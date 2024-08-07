import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { createContext, useState } from 'react';
import Fourth from './components/Fourth';

export const MessageContext = createContext();
export const CounterContext = createContext();
function App() {
   const [counter,setCounter] = useState(100);
   return <>
      <h1>App Component...</h1>
      <MessageContext.Provider value={{message:"Hello"}}>
        <CounterContext.Provider value={{counter,setCounter}}>
          <First/>
        </CounterContext.Provider>
      </MessageContext.Provider>
      
   </>
}

export default App;
