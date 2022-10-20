import { FC } from "react";
import Image from "next/image";

// styles

//import ce from '../styles/CommonElements.module.scss';
import aboutP from '../styles/PageAboutMe.module.scss';

//interface DiplomCardsProps {}

// data
import { data_diplomas, data_certs } from '../dataJson/diplomas';

//import ndipl1 from '../public/pageAboutMe/ndip1.png';
//import cert1 from '../public/pageAboutMe/cert1.png';


const DiplomCards:FC = (props) => {
  return (<>
    <div className={aboutP.about_qualif_div}>
      { data_diplomas.map( (item, index) => {
        return <div key={index} className={aboutP.about_qualif_card}>
          <div className={aboutP.about_qualif_card__title}>{item.qualification}</div>

          <div className={aboutP.about_qualif_card__text}>{item.unv_spec}</div>
          
          <div className={aboutP.about_qualif_card__img}> <Image src={item.diplom_img} alt="dipl1"/> </div>
      </div>
      }) }
    </div>
    
    <div>
      <div style={{margin:'40px 40px 20px 60px'}}>
        <span style={{textTransform:'uppercase', fontWeight:'bold'}}>Повышение квалификаций:</span> более 20 курсов и программ.
      </div>

      <div className={aboutP.about_qualif_div}>
        { data_certs.map( (item, index) => {
          return <div key={index} className={aboutP.about_qualif_card__img}>  <Image src={item.cert_img} alt="dipl4"/> </div>
        }) }
      </div>
    </div>
  </>)
}

export default DiplomCards;
