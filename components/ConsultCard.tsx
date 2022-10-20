import { FC } from "react";
import Image, {StaticImageData} from "next/image";

// styles
import ce from '../styles/CommonElements.module.scss';
import ConsultCardSt from './ConsultCard.module.scss';

// images
//import thercons1 from '../public/homepage/thercons1.png';

interface ConsultCardProps {
  img: StaticImageData,
  title?: String,
  aim?: String,
  duration?: String,
  online_offline?: String,
  price?: String,
}

const ConsultCard:FC<ConsultCardProps> = (props) => {
  return (<div className={ConsultCardSt.consult_card}>
    <div className={ConsultCardSt.consult_card__imgWrapper}>
      <Image src={props.img} alt="therapy"/>
    </div>
    
    <div className={ConsultCardSt.consult_card__title}>
      {props.title}
    </div> 

    <div className={ConsultCardSt.consult_card__aim}>
      {props.aim}
    </div>

    <div className={ConsultCardSt.consult_card__details}>
      <div>Длительность {props.duration}.</div>
      <div>{props.online_offline}.</div>
      <div>Стоимость консультации {props.price}.</div>      
    </div>

    <div className={ce.btnSignUp}>Записаться</div>
  </div>  
  )
}

export default ConsultCard;
