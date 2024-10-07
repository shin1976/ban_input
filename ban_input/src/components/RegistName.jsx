import React, { useState } from 'react'
import { useCookies} from 'react-cookie';

const RegistName = () => {
    const[cookies,setCookie] = useCookies(['user']);
    const [userName,setUserName] = useState('')
    const setCookieWithExpiry = () => {
        const date = new Date();
        date.setMonth(date.getMonth() + 1); // 1カ月後の日時を設定
        setCookie('name',userName , { path: '/', expires: date });
      };
    const handleChange=(e)=>{
        setUserName(e.target.value);
      }

      const setName = ()=>{
        setCookieWithExpiry();
        window.location.reload();
      }
  return (
    <div className="regist_name">
        
    <p>名前: {cookies.name}</p>
    <span>{cookies.name}</span>
    <input type="text" size='5' value={userName} onChange={handleChange}></input>
    <button onClick={setName}>名前登録</button>
    </div>
  )
}

export default RegistName