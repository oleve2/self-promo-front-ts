import { FC } from "react";
import Image from "next/image";

// styles
import artcard from '../styles/ArticleCard.module.scss';

// image
import article1 from '../public/homepage/article1.png';

interface ArticleCardProps {}

const ArticleCard:FC<ArticleCardProps> = (props) => {
  return ( <div className={artcard.wrapper}>
    <div className={artcard.articleCard__imgWrapper}>
      <Image src={article1} alt="photo"/>
    </div>

    <div className={artcard.articleCard__title}>Откладывание на завтра</div>
    
    <div className={artcard.articleCard__text}>
    Прокрастинация, лень, самосаботаж, сопротивление — это синонимы одного и тоже процесса — откладывания на потом важного.
    В результате невыполненные дела накапливаются как снежный ком, нарастает тревога и появляется вина. 
    Кроме этого включается внутренний критик, который начинает уничтожать нашу веру в себя и последнее желание что-то делать.      
    </div>

    <div className={artcard.linkWithArrow}>Читать дальше</div>
  </div>
  )
}

export default ArticleCard;

