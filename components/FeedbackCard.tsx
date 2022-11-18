import { FC } from "react";

// models
import { FeedbackType } from "../models/FeedbackModels";

// styles
import fdbks from './Feedbacks.module.scss';

interface FeedbackCardProps {
  feedbackActive: FeedbackType,
}

const FeedbackCard:FC<FeedbackCardProps> = (props) => {
  return (
  <div className={fdbks.fdbks__sigleFbdk}>
    <div className={fdbks.fdbks__textblock}> 
      <span className={fdbks.fdbks__bold}>{props.feedbackActive.name}</span>, {props.feedbackActive.feedback_to}
    </div>
    
    { props.feedbackActive.fdbck.map( (item, index) => {
      return <div key={index} className={fdbks.fdbks__textblock}>{item}</div>
    }) }

    <div style={{display:'flex'}}>
      <div className={fdbks.fdbks__date}>{props.feedbackActive.feedback_date}</div>
      {/*<div className="fdbks__stars">звезды</div>*/}
    </div>
  </div>  
  )
}

export default FeedbackCard;
