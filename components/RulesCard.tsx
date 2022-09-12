import { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import { useState } from "react";

// styles
import rlcrd from './RulesCard.module.scss';

// images
import rule_opened from '../public/pageRules/rule_opened.png';
import rule_closed from '../public/pageRules/rule_closed.png';

interface RulesCardProps {
  pic: StaticImageData,
  title: String,
  text: String,
}

const RulesCard:FC<RulesCardProps> = (props) => {
  const [isOpen, setisOpen] = useState(false);

  return (
  <div className={rlcrd.card_wrapper}>
    <div className={rlcrd.card__header}>
      <Image src={props.pic} alt="pic"/>

      <div>{props.title}</div>

      <div className={rlcrd.a3} onClick={() => { setisOpen(!isOpen) }}>
        { (isOpen) 
          ? <Image src={rule_opened} alt="open"/>
          : <Image src={rule_closed} alt="close"/>
        }
      </div>
    </div>

    { 
    isOpen && <div className={rlcrd.card__content}>
      {props.text}
    </div> 
    }
  </div>
  )
}

export default RulesCard;

