import React, { useContext } from 'react'
import { MyContext } from '../App'

const Display = () => {
  const{state,koma,hugo} = useContext(MyContext);
  return (
    <div id="komaHyouji">
      <div className="input_tag"><span className="input_text">{state}{koma}{hugo}</span>
      <button className="input_button">入力</button></div>
    </div>
  )
}

export default Display