import { FC } from "react";
import Image from "next/image";

// styles
import ConsultCardSt from '../styles/ConsultCard.module.scss';
import thercons1 from '../public/homepage/thercons1.png';

interface ConsultCardProps {}

const ConsultCard:FC<ConsultCardProps> = (props) => {
  return (<div className={ConsultCardSt.consult_card}>
    <div className={ConsultCardSt.consult_card__imgWrapper}>
      <Image src={thercons1} alt="therapy"/>
    </div>
    
    <div className={ConsultCardSt.consult_card__title}>
      Психологическое консультирование
    </div> 

    <div className={ConsultCardSt.consult_card__aim}>
      Решает актуальную жизненную задачу, с которой вам трудно справиться самостоятельно.
    </div>

    <div className={ConsultCardSt.consult_card__details}>
      <div>Длительность 50 минут.</div>
      <div>Очно / Онлайн.</div>
      <div>Стоимость консультации от 4000 рублей.</div>      
    </div>

    <div className={ConsultCardSt.btnSignUp}>Записаться</div>
  </div>  
  )
}

export default ConsultCard;
