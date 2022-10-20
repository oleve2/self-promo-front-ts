import { FC } from "react";
import Image from "next/image";
import { useState } from "react";

// images
import arrToLeft  from '../public/homepage/arrToLeft.png';
import arrToRight from '../public/homepage/arrToRight.png';
import img_fdbck from '../public/common/feedback.png';
import img_fdbck_active from '../public/common/feedback_active.png';


// styles
import ce from '../styles/CommonElements.module.scss';
import fdbks from './Feedbacks.module.scss';

// data
import { data_feedbacks } from '../dataJson/feedbacks';

//interface feedbackProps {}

const Feedbacks:FC = (props) => {
  const [activeNum, setactiveNum] = useState(0);
  const [feedbackActive, setfeedbackActive] = useState(data_feedbacks[activeNum]);
  
  const changeANPlus = () => {
    if (activeNum == (data_feedbacks.length -1)) {
      setactiveNum(0);
      setfeedbackActive(data_feedbacks[0]);
    } else {
      setactiveNum(activeNum + 1);
      setfeedbackActive(data_feedbacks[activeNum + 1]);
    }
  }

  const changeANMinus = () => {
    if (activeNum == 0) {
      setactiveNum(data_feedbacks.length -1);
      setfeedbackActive(data_feedbacks[data_feedbacks.length -1]);
    } else {
      setactiveNum(activeNum - 1);
      setfeedbackActive(data_feedbacks[0]);
      setfeedbackActive(data_feedbacks[activeNum - 1]);
    }
  }

  // array for slider
  const FeedbackSliderArr = Array.from(Array(data_feedbacks.length).keys());


  return (
  <div className={fdbks.fdbks_CommonWrapper}>
    <div className={fdbks.fdbks_wrapper}>
      {/* стрелка влево */}
      <div onClick={() => { changeANMinus() }}>
        <div> <Image src={arrToLeft} alt="влево"/> </div>
      </div>
      
      {/* компонент отзыва */}
      <div className={fdbks.fdbks__sigleFbdk}>
        <div className={fdbks.fdbks__textblock}> 
          <span className={fdbks.fdbks__bold}>{feedbackActive.name}</span>, {feedbackActive.feedback_to}
        </div>
        
        { feedbackActive.fdbck.map( (item, index) => {
          return <div key={index} className={fdbks.fdbks__textblock}>{item}</div>
        }) }

        <div style={{display:'flex'}}>
          <div className={fdbks.fdbks__date}>{feedbackActive.feedback_date}</div>
          <div className="fdbks__stars">звезды</div>
        </div>
      </div>  
      
      {/* стрелка вправо */}
      <div onClick={() => { changeANPlus() }}>
        <div> <Image src={arrToRight} alt="вправо"/> </div>
      </div>              
    </div>
    
    <div style={{display:'flex', width:'663px', justifyContent:'flex-start', marginTop:'20px'}}>
      <div className={ce.linkWithArrow}>оставить отзыв</div>
    </div>
    
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginTop:'20px'}}>
      {/*<div>слайдер крутилки {JSON.stringify(activeNum)}</div>*/}
      <div style={{display:'flex'}}> 
        { FeedbackSliderArr.map( (item) => {
          return <div key={item} style={{marginRight:'10px'}}>
            <Image src={(item === activeNum) ? img_fdbck_active : img_fdbck} alt="fbd_num"></Image> 
          </div>
          
        })  }
      </div>
    </div>
  </div>
  )
}

export default Feedbacks;
