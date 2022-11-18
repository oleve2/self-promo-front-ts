import { FC } from "react";
import Image, {StaticImageData} from "next/image";

// styles
import ce from '../styles/CommonElements.module.scss';
import ConsultCardSt from './ConsultCard.module.scss';

// images
//import thercons1 from '../public/homepage/thercons1.png';

interface ConsultCardProps {
  img: StaticImageData,
  title?: string,
  aim?: string,
  duration?: string,
  online_offline?: string,
  price?: string,
  isdesktop: boolean,
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

    <div className={ce.btnSignUp + " " + (!props.isdesktop ? ConsultCardSt.btn_width100 : '')}>Записаться</div>
  </div>  
  )
}

export default ConsultCard;
