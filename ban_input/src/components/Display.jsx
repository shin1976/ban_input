import React, { useContext, useState } from 'react'
import { MyContext } from '../App'
import axios from 'axios';
import { useCookies} from 'react-cookie';

const Display = () => {
  const{state,setState,koma,setKoma,hugo,setHugo,answer,setAnswer} = useContext(MyContext);
  
  // const [userName,setUserName] = useState('')
  const [submittedAnswer,setSubmittedAnswer] = useState('')
  const[cookies,setCookie] = useCookies(['user']);

  // const setName = ()=>{
  //   setCookieWithExpiry();
  //   window.location.reload();
  // }

  // const setCookieWithExpiry = () => {
  //   const date = new Date();
  //   date.setMonth(date.getMonth() + 1); // 1カ月後の日時を設定
  //   setCookie('name',userName , { path: '/', expires: date });
  // };
  // const handleChange=(e)=>{
  //   setUserName(e.target.value);
  // }

  const addAnswer = ()=>{
    // let newAnswer= [...answer];
     let newAnswer = [...answer,state+koma+hugo];
      setState('');
      setKoma('');
      setHugo('');
      setAnswer(newAnswer);
      // console.log(newAnswer);

  }
  const resetAnswer = ()=>{
    setState('');
      setKoma('');
      setHugo('');
      setAnswer([]);

  }
  const submitAnswer = async(e)=>{
    
    e.preventDefault();
    setSubmittedAnswer(answer);
    setAnswer([]);
    // try {
    //   const response = await axios.post('https://yutatomo.sakura.ne.jp/ban_input/result.php',answer);
    //   // console.log(response.data);
    // } catch (error) {
    //   console.error('Error submitting form', error);
    // }
    // console.log(answer);
   
      const formData = new URLSearchParams();
      formData.append('value', answer);
      formData.append('name', cookies.name);

    //  通常用
      // axios.post('https://yutatomo.sakura.ne.jp/ban_input/result.php', formData)
      // //無限モード用（併用できるかのテスト）
      axios.post('https://shinito.net/mekakusi_input/result.php', formData)
        .then(response => {
          console.log('Data submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error submitting data:', error);
        });
  
      


  }
  return (
    <>
   
    <div id="komaHyouji">
      <div className="submitted_data">【送信済みデータ】{submittedAnswer}</div>
    <div id='sendForm'>
      <p>{answer.join(', ')}</p>
    </div>
      <div className="input_tag"><div className="input_text">{state}{koma}{hugo}</div>
      <div><button className="input_button" onClick={addAnswer}>入力</button>
      <button className="input_button" onClick={resetAnswer}>リセット</button>
      <button className="input_button" onClick={submitAnswer}>送信</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Display