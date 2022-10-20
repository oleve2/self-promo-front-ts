import { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import { useState } from "react";

// styles
import rlcrd from './RulesCard.module.scss';

// images
import rule_opened from '../public/pageRules/rule_opened.png';
import rule_closed from '../public/pageRules/rule_closed.png';

interface RulesCardProps {
  id: Number,
  pic: StaticImageData,
  title: String,
  textArr: String[]
}

const RulesCard:FC<RulesCardProps> = (props) => {
  const [isOpen, setisOpen] = useState(false);

  return (
  <div className={rlcrd.card_wrapper}>
    <div style={{display:'flex'}}>
      <div style={{marginRight:'30px'}}>
        <Image src={props.pic} alt="pic"/>
      </div>
      
      <div className={rlcrd.card__header}>
        <div>{props.title}</div>

        <div onClick={() => { setisOpen(!isOpen) }}>
          { (isOpen) 
            ? <Image src={rule_opened} alt="open"/>
            : <Image src={rule_closed} alt="close"/>
          }
        </div>      
      </div>
    </div>

    { 
    isOpen && <div className={rlcrd.card__content}>
      {props.textArr.map( (item, index) => {
        return <div key={index}>
          <div>{item}</div> <br />
        </div>
        
      })}
    </div> 
    }
  </div>
  )
}

export default RulesCard;

