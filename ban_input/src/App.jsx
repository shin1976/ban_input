import { createContext, useState } from 'react'
export const MyContext = createContext();
import './Reset.css'
import './App.css'
// import Ban from './components/Ban'
import Title from './components/Title'
// import Display from './components/Display';
import Koma from './components/Koma';
import Bankoma from './components/Bankoma';
import RegistName from './components/RegistName';

function App() {
  const [state,setState] = useState('')
  const [koma,setKoma] = useState('')
  const [hugo,setHugo] = useState('')
  const [answer,setAnswer] = useState([]);
  // const dan = ["一", "二", "三", "四", "五", "六", "七", "八", "九", ""];
  // const getState=(event)=>{
  //   const ban_id = event.target.id;
  //   setState(ban_id.charAt(1)+dan[ban_id.charAt(2)-1]);
  // }

  return (
    <MyContext.Provider value={ {state,setState,koma,setKoma,hugo,setHugo,answer,setAnswer}}>
    <Title/>
    <Bankoma/>
   
   
    <Koma/>
    <RegistName/>
    </MyContext.Provider>

  )
}

export default App
