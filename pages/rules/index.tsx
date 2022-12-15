import { FC } from "react";
import Image from "next/image";
import Head from 'next/head';

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
import whiteSquare from '../../public/pageRules/whitesquare.png';

// data
import { data_rules } from '../../dataJson/rulesRulespage';

import { PageProps } from '../../models/PageModel';
import { RulesType } from '../../models/RulesModel';

//
const Rules:FC<PageProps> = (props) => {
  const ruleEmpty: RulesType = {id:-1, title:'', textArr:[], img: whiteSquare}

  //
  return (
  <div className={ce.rootWrapper}>
    <Head>
      <title>Психолог Айгуль Дейнекина - Правила работы</title>
      <meta 
        name="description"
        content="Психолог Айгуль Дейнекина - Правила работы"
        key="desc"
        />        
    </Head>

    <Menu isDesktop={props.isDesktop}/>
    <div className={ce.PageHeader2}></div> 
      
    <div className={homeP.personInfo_wrapper}>
      <div className={homeP.personInfo}>
        { props.isDesktop && <div className={ce.div_textQuote}>Договорённость заранее избавляет от недопонимания в дальнейшем </div> }

        <div className={rulesP.rules__textHeader}>
          Мировая психотерапевтическая практика практическим путем вывела психотерапевтические правила работы. 
        </div>
        <div className={rulesP.rules__textHeader}>
          Цель —  создание безопасных и ясных условий совместной работы.
        </div>
      </div>

      <div className={homeP.img_portrait}>
        <Image src={imgStones} alt="portrarait_aboutme"/>
      </div>
    </div>
    
    {/* кусок до полной страницы */}
    <div style={{height:'150px'}}></div>

    <div className={ce.divPage}>
      <h2 className={ce.title_h2}>Правила работы</h2>

      <div className={rulesP.rules_divCenter}>
        <div className={rulesP.rules_annotation}>
        Пожалуйста, прежде чем записаться на встречу, ознакомьтесь с правилами сотрудничества. Ознакомившись с правилами и продолжая посещать психотерапевта, вы тем самым соглашаетесь с ними.
        </div>
      </div>
      
      <div className={rulesP.rules_divCenter}>
      { data_rules.map( (item) => {
        return <RulesCard key={item.id} rule={item} isFakeBottom={false}/>
      }) }
      
      <RulesCard rule={ruleEmpty} isFakeBottom={true}/>
      </div>
    </div>

    <Footer isDesktop={props.isDesktop} backgroundColor="#E7F4FF"/>
  </div>)
}

export default Rules;
