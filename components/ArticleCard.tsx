import { FC } from "react";
import Image, {StaticImageData} from "next/image";

// styles
import ce from '../styles/CommonElements.module.scss';
import artcard from './ArticleCard.module.scss';

interface ArticleCardProps {
  img: StaticImageData,
  title: String,
  textArr: String[],
}

const ArticleCard:FC<ArticleCardProps> = (props) => {
  return ( <div className={artcard.wrapper}>
    <div className={artcard.articleCard__imgWrapper}>
      <Image src={props.img} alt="photo"/>
    </div>

    <div className={artcard.articleCard__title}>{props.title}</div>
    
    <div className={artcard.articleCard__text}>
    {props.textArr.map( (item, index) => {
      return <div key={index}>{item}</div>
    })}
    </div>

    <div className={ce.linkWithArrow}>Читать дальше</div>
  </div>
  )
}

export default ArticleCard;

