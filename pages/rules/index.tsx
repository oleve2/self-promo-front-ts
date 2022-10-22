import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { useEffect } from 'react';

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import RulesCard from "../../components/RulesCard";

// styles
import ce from '../../styles/CommonElements.module.scss';
import rulesP from '../../styles/PageRules.module.scss';
import homeP from '../../styles/PageHome.module.scss';

// images
import imgStones from '../../public/pageRules/imgStones.png';

// data
import { data_rules } from '../../dataJson/rules';


const Rules:FC = () => {

  useEffect( () => {
    document.title = 'Психолог Айгуль Дейнекина: Правила работы';
  }, [])

  //
  return (
  <div className={ce.rootWrapper}>
    <Menu />
    <div className={ce.PageHeader2}></div> 
      
    {/* элемент абсолютное позиционирование */} 
    <div className={homeP.personInfo_wrapper}>
      <div className={homeP.personInfo} style={{marginRight:'40px', height:'642px', width:'700px'}}>
        <div className={ce.div_textQuote}>Договорённость заранее избавляет от недопонимания в дальнейшем </div>

        <div className={homeP.homeAbout__text} style={{fontSize:'25px'}}>
          Мировая психотерапевтическая практика практическим путем вывела психотерапевтические правила работы. 
        </div>
        <div className={homeP.homeAbout__text} style={{fontSize:'25px'}}>
          Цель —  создание безопасных и ясных условий совместной работы.
        </div>
      </div>

      <div className={homeP.img_portrait}>
        <Image src={imgStones} alt="portrarait_aboutme"/>
      </div>
    </div>
    
    {/* кусок до полной страницы */}
    <div style={{height:'calc(100vh - 383px)', display:'flex'}}></div>      

    <div className={ce.divPage}>
      <h2 className={ce.title_h2}>Правила работы</h2>

      <div className={rulesP.rules_divCenter}>
        <div className={rulesP.rules_annotation}>
        Пожалуйста, прежде чем записаться на встречу, ознакомьтесь с правилами сотрудничества.
        </div>
      </div>
      
      {/* тут будет список компонентов карточка инфы */}
      <div className={rulesP.rules_divCenter}>
      { data_rules.map( (item) => {
        return <RulesCard key={item.id} 
          id={item.id}
          pic={item.img}
          title={item.title} 
          textArr={item.textArr}
        />
      }) }
      </div>
    </div>

    <Footer />
  </div>)
}

export default Rules;
