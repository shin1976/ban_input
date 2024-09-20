import React, { useContext } from 'react'
import { MyContext } from '../App'
import axios from 'axios';

const Display = () => {
  const{state,setState,koma,setKoma,hugo,setHugo,answer,setAnswer} = useContext(MyContext);
  const addAnswer = ()=>{
    // let newAnswer= [...answer];
     let newAnswer = [...answer,state+koma+hugo];
      setState('');
      setKoma('');
      setHugo('');
      setAnswer(newAnswer);
      console.log(newAnswer);

  }
  const resetAnswer = ()=>{
    setState('');
      setKoma('');
      setHugo('');
      setAnswer([]);

  }
  const submitAnswer = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('https://yutatomo.sakura.ne.jp/ban_input/result.php', { answer });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
    console.log(answer);
  }
  return (
    <>
   
    <div id="komaHyouji">
    <div id='sendForm'>
      <p>{answer.join(', ')}</p>
    </div>
      <div className="input_tag"><span className="input_text">{state}{koma}{hugo}</span>
      <button className="input_button" onClick={addAnswer}>入力</button>
      <button className="input_button" onClick={resetAnswer}>リセット</button>
      <button className="input_button" onClick={submitAnswer}>送信</button>
      
      </div>
    </div>
    </>
  )
}

export default Display