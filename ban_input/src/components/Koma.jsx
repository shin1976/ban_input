import React, { useContext} from 'react'
import { MyContext } from '../App';

const Koma = function KomacharInput() {
    const {setState,setKoma,setHugo} = useContext(MyContext);
    const getKoma = (event)=>{
        // console.log(event.target.dataset.flag);
        if(event.target.dataset.flag=='k'){
            setKoma(event.target.name);
        }else if(event.target.dataset.flag=='h'){
            setHugo(event.target.name);
        }else if(event.target.dataset.flag=='d'){
            setState(event.target.name);
        }
        
    }
  
    const images = [
      { id: "k0", src: "komachar/s_hu.png",name:"歩",flag:'k'},
      { id: "k1", src: "komachar/s_kyou.png",name:"香",flag:'k' },
      { id: "k2", src: "komachar/s_kei.png",name:"桂",flag:'k' },
      { id: "k3", src: "komachar/s_gin.png",name:"銀",flag:'k' },
      { id: "k4", src: "komachar/s_kin.png",name:"金",flag:'k'},
      { id: "k5", src: "komachar/s_kaku.png",name:"角",flag:'k'},
      { id: "k6", src: "komachar/s_hi.png",name:"飛",flag:'k' },
      { id: "k7", src: "komachar/s_gyoku.png",name:"玉",flag:'k' },
      { id: "k8", src: "komachar/s_to.png",name:"と",flag:'k' },
      { id: "k9", src: "komachar/s_narikyou.png",name:"成香",flag:'k' },
      { id: "k10", src: "komachar/s_narikei.png",name:"成桂",flag:'k' },
      { id: "k11", src: "komachar/s_narigin.png",name:"成銀",flag:'k' },
      { id: "k12", src: "komachar/s_uma.png",name:"馬",flag:'k' },
      { id: "k13", src: "komachar/s_ryuu.png",name:"竜",flag:'k' },
      { id: "k15", src: "komachar/s_utu.png",name:"打" ,flag:'h'},
      { id: "k16", src: "komachar/s_ai.png" ,name:"合",flag:'h'},
      { id: "k17", src: "komachar/s_nari.png" ,name:"成",flag:'h'},
      { id: "k18", src: "komachar/s_hunari.png",name:"不成",flag:'h' },
      { id: "k14", src: "komachar/s_dou.png",name:"同",flag:'d' },
    ];
  
    return (
      <div>
        <div id="koma_display">
          {images.map((image) => (
            <img
              key={image.id}
              className="komachar"
              id={image.id}
              src={image.src}
              data-flag={image.flag}
              name={image.name}
              onClick={getKoma}
            />
          ))}
        </div>
      </div>
    );
  }

export default Koma