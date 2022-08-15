import { FC } from "react";
import Image from "next/image";

// images
import arrToLeft  from '../public/homepage/arrToLeft.png';
import arrToRight from '../public/homepage/arrToRight.png';

// styles
import fdbks from '../styles/Feedbacks.module.scss';


const Feedbacks:FC = (props) => {
  return (
  <div>
    <div className={fdbks.fdbks_wrapper}>
      <div>
        <div> <Image src={arrToLeft} alt="влево"/> </div>
      </div>
      
      {/* FeedbackCard component (maybe) */}
      <div className={fdbks.fdbks__sigleFbdk}>
        <div className={fdbks.fdbks__textblock}> 
          <span className={fdbks.fdbks__bold}>Дарья Житникова</span>, тренинг ЕМДР
        </div>

        <div className={fdbks.fdbks__textblock}>
          Для меня EMDR-тренинг — это была прежде всего возможность посвятить время только себе. 
          Очень комфортным для меня был и темп работы и сопровождение терапевта. 
        </div>

        <div className={fdbks.fdbks__textblock}>
          В процессе работы мне удалось сильно снизить тревогу, которая сопровождала мой запрос. 
          А уже через неделю я смогла реализовать то, на что направлена была моя проработка. 
          Айгуль, спасибо тебе огромное за подаренную возможность двигаться вперёд!
        </div>
        
        <div style={{display:'flex'}}>
          <div className={fdbks.fdbks__date}>18.05.2022</div>
          <div className="fdbks__stars">звезды</div>
        </div>
      </div>  
      
      <div>
        <div> <Image src={arrToRight} alt="вправо"/> </div>
      </div>              
    </div>
    
    <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
      <div className={fdbks.linkWithArrow}>оставить отзыв</div>
    </div>
    
    <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
      <div>слайдер крутилки</div>
    </div>
  </div>
  )
}

export default Feedbacks;
