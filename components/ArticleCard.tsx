import { FC } from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

// styles
import ce from '../styles/CommonElements.module.scss';
import artcard from './ArticleCard.module.scss';

// models
import { ArticleHomepage } from '../models/ArticleModels';


interface ArticleCardProps {
  data: ArticleHomepage,
}

const ArticleCard:FC<ArticleCardProps> = (props) => {
  return ( <div className={artcard.wrapper}>
    <div className={artcard.articleCard__imgWrapper}>
      <Image src={props.data.img} alt="photo"/>
    </div>

    <div className={artcard.articleCard__title}>{props.data.title}</div>
    
    <div className={artcard.articleCard__text}>
    {props.data.text.map( (item, index) => {
      return <div key={index}>{item}</div>
    })}
    </div>

    <div className={ce.linkWithArrow}>
      <Link href={props.data.articlePageLink}>Читать дальше</Link> 
    </div>
  </div>
  )
}

export default ArticleCard;

