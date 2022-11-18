import { FC } from "react";
import Image from "next/image";
import { useState } from "react";

// styles
//import ce from '../styles/CommonElements.module.scss';
import dipcards from './DiplomCards.module.scss';

// components
import MobileSlider from "./MobileSlider";

// data
import { data_diplomas, data_certs } from '../dataJson/diplomas';

interface DiplomCardsProps {
  isDesktop: boolean,
}

const DiplomCards:FC<DiplomCardsProps> = (props) => {
  // diploms --------------------------
  const diplomsSilderArray = Array.from(Array(data_diplomas.length).keys());
  const [diplomNumActive, setdiplomNumActive] = useState(0);
  const [diplomActive, setdiplomActive] = useState(data_diplomas[diplomNumActive])

  const updateDiplomActive = (num: number) => {
    setdiplomNumActive(num);
    setdiplomActive(data_diplomas[num]);
  }
  // certificates --------------------------
  const certSilderArray = Array.from(Array(data_certs.length).keys());
  const [certNumActive, setcertNumActive] = useState(0);
  const [certActive, setcertActive] = useState(data_certs[certNumActive])

  const updateCertActive = (num: number) => {
    setcertNumActive(num);
    setcertActive(data_certs[num]);
  }

  // -----------------------------------
  return (<>
    {/* Дипломы */}
    {props.isDesktop && 
    <div className={dipcards.about_qualif_div}>
    { data_diplomas.map( (item, index) => {
      return <div key={index} className={dipcards.about_qualif_card}>
        <div className={dipcards.about_qualif_card__title}>{item.qualification}</div>

        <div className={dipcards.about_qualif_card__text}>{item.unv_spec}</div>
        
        <div className={dipcards.about_qualif_card__img}> 
          <Image src={item.diplom_img} alt="dipl"/> 
        </div>
    </div>
    }) }
    </div>    
    }

    { !props.isDesktop &&  
    <div className={dipcards.about_qualif_div}>
    <MobileSlider
        itemNumActive={diplomNumActive}
        funcUpdateItemactive={updateDiplomActive}
        arraySlider={diplomsSilderArray}
      > 
      <div className={dipcards.about_qualif_card}>
        <div className={dipcards.about_qualif_card__title}>{diplomActive.qualification}</div>

        <div className={dipcards.about_qualif_card__text}>{diplomActive.unv_spec}</div>
        
        <div className={dipcards.about_qualif_card__img}> 
          <Image src={diplomActive.diplom_img} alt="dipl"/> 
        </div>
      </div>
    </MobileSlider>          
    </div>    
    }


    {/* Сертификаты */}
    <div className={dipcards.additionalQual_title}>
      <span className={dipcards.additionalQual_marked} >Повышение квалификаций:</span> более 20 курсов и программ.
    </div>

    {props.isDesktop && 
    <div>
      <div className={dipcards.about_qualif_div}>
        { data_certs.map( (item, index) => {
          return <div key={index} className={dipcards.about_qualif_card__img}>  
            <Image src={item.cert_img} alt="cert"/> 
          </div>
        }) }
      </div>
    </div>
    }

    { !props.isDesktop &&  
    <MobileSlider
      itemNumActive={certNumActive}
      funcUpdateItemactive={updateCertActive}
      arraySlider={certSilderArray}
    > 
      <div className={dipcards.about_qualif_div}>
        <div className={dipcards.about_qualif_card__img}>  
          <Image src={certActive.cert_img} alt="cert"/> 
        </div>        
      </div>
    </MobileSlider>    
    }

  </>)
}

export default DiplomCards;
