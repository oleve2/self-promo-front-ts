import { FC } from "react";
import Image, { StaticImageData } from 'next/image';
import { useState } from "react";

// styles
import rlcrd from './RulesCard.module.scss';

// images
import rule_opened from '../public/pageRules/rule_opened.png';
import rule_closed from '../public/pageRules/rule_closed.png';

import { rulesBlock, RulesType } from '../models/RulesModel';
import { PassageType } from "../models/ArticleModels";


interface RulesCardProps {
  rule: RulesType,
  isFakeBottom: boolean,
}

const RulesCard:FC<RulesCardProps> = (props) => {
  const [isOpen, setisOpen] = useState(false);

  const constructRuleTag = (item: rulesBlock) => {
    if (item.type === PassageType.text_bold) {
      return <span className={rlcrd.text__bold}>{item.text}</span>
    }
    if (item.type === PassageType.text) {
      return <span>{item.text}</span>
    }
  }

  return (
  <div className={rlcrd.card_wrapper}>
    <div style={{display:'flex'}}>
      <div style={{marginRight:'30px', width:'40px'}}>
        <Image src={props.rule.img} alt="pic"/>
      </div>
      
      { !props.isFakeBottom &&  
      <div className={rlcrd.card__header}>
        <div>{props.rule.title}</div>

        <div style={{width:'40px'}} onClick={() => { setisOpen(!isOpen) }}>
          { (isOpen) 
            ? <Image src={rule_opened} alt="open"/>
            : <Image src={rule_closed} alt="close"/>
          }
        </div>      
      </div>      
      }
    </div>

    { 
    isOpen && <div className={rlcrd.card__content}>
      {props.rule.textArr.map( (item, index) => {
        return <div key={index}>
          <div>{item.paragraphdata.map( (itemInner, indexInner) => {
            return <span key={itemInner.text}>
              {constructRuleTag(itemInner)}
            </span>
          })}</div> 
          <br />
        </div>
      })}
    </div> 
    }
  </div>
  )
}

export default RulesCard;

