import { FC } from "react";
import Image from "next/image";

// styles
//import ce from '../styles/CommonElements.module.scss';
import dipcards from './DiplomCards.module.scss';

// data
import { data_diplomas, data_certs } from '../dataJson/diplomas';

//interface DiplomCardsProps {}

const DiplomCards:FC = (props) => {
  return (<>
    <div className={dipcards.about_qualif_div}>
      { data_diplomas.map( (item, index) => {
        return <div key={index} className={dipcards.about_qualif_card}>
          <div className={dipcards.about_qualif_card__title}>{item.qualification}</div>

          <div className={dipcards.about_qualif_card__text}>{item.unv_spec}</div>
          
          <div className={dipcards.about_qualif_card__img}> <Image src={item.diplom_img} alt="dipl1"/> </div>
      </div>
      }) }
    </div>
    
    <div>
      <div className={dipcards.additionalQual_title}>
        <span className={dipcards.additionalQual_marked} >Повышение квалификаций:</span> более 20 курсов и программ.
      </div>

      <div className={dipcards.about_qualif_div}>
        { data_certs.map( (item, index) => {
          return <div key={index} className={dipcards.about_qualif_card__img}>  <Image src={item.cert_img} alt="dipl4"/> </div>
        }) }
      </div>
    </div>
  </>)
}

export default DiplomCards;
