import { FC } from "react";
import Image from "next/image";
import Head from 'next/head';

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import CommunicationForm from "../../components/CommunicationForm";
import DiplomCards from "../../components/DiplomCards";

// style
import ce from '../../styles/CommonElements.module.scss';
import aboutP from '../../styles/PageAboutMe.module.scss';
import homeP from '../../styles/PageHome.module.scss';

// images
import portrAboutMe from '../../public/pageAboutMe/DSC01632 1.png';
import imgMyAim from '../../public/pageAboutMe/DSC01855 1.png';

import { PageProps } from "../../models/PageModel";

const About:FC<PageProps> = (props) => {
  return (
    <div className={ce.rootWrapper}>
      <Head>
        <title>Психолог Айгуль Дейнекина - Обо мне</title>
        <meta 
          name="description"
          content="Психолог Айгуль Дейнекина - Обо мне"
          key="desc"
          />        
      </Head>

      <Menu isDesktop={props.isDesktop} />
      <div className={ce.PageHeader2}></div>

      <div className={homeP.personInfo_wrapper}>
        <div className={homeP.img_portrait}>
          <Image src={portrAboutMe} alt="portrarait_aboutme"/>
        </div>
        
        <div className={homeP.personInfo}>
          <div className={homeP.homeAbout__title}>Меня зовут <br /> Айгуль Дейнекина</div>
          
          <div className={aboutP.a123}>
            <div className={homeP.homeAbout__text}>Я EMDR, танцевально-двигательный  и гештальт-психотерапевт. Член ЕМДР-ассоциации. </div>
            <div className={homeP.homeAbout__text}>Более чем 15-лет успешно помогаю людям решать сложные задачи, связанные с уверенностью в себе, 
            трудностями в отношениях, карьерным ростом и самореализацией. </div>
            <div className={homeP.homeAbout__text}>Психолог по призванию. Мне ценно работать честно, ясно и внимательно. </div>
            <div className={homeP.homeAbout__text}>Верю в способность каждого проживать свою жизнь наполнено, включенно, интересно.</div>
            <div className={homeP.homeAbout__text}>Помогу Вам решить новые жизненные задачи, разобраться с детскими травмами, а также эффективно 
            пережить трудные моменты в жизни: горе, развод, измена, расставание, создание семьи/пары, становление родительства, 
            беременность и материнство и пр.</div>
            <div className={homeP.homeAbout__text}>Веду практику в Москве очно и онлайн.</div>
            <div className={homeP.homeAbout__text}>Постоянно повышаю профессиональную квалификацию, 
            участвую в интенсивах и конференциях, посещаю супервизии и личную терапию.</div>
          </div>

        </div>
      </div>

      
      <div style={{height:'150px'}}></div>

      <div style={{margin:'0 20px'}}>
        <div className={ce.div_textQuote}>Грамм собственного опыта стоит дороже тонны чужих наставлений!</div>
      </div>

      <div className={ce.divPage} style={{backgroundColor:'#EEF7FF'}}>
        <h2 className={ce.title_h2}>Квалификации</h2>

        <DiplomCards isDesktop={props.isDesktop}/>
      </div>

      <div className={aboutP.divPageFitCont}>
        <h2 className={ce.title_h2}></h2>

        <div className={aboutP.disclaimer_wrapper}>
          <div style={{margin:'0 20px'}}>
            <div className={ce.div_textQuote}>Цель моей работы — сопровождать на пути к самореализации, свободе,  внутренней ясности</div>
          </div>
          
          <div className={aboutP.disclaimer__photo}> 
            <Image src={imgMyAim} alt="imgMyAim"/> 
          </div>
        </div>
      </div>
 
      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>Запись на консультацию</h2>
        <CommunicationForm />
      </div>

      <Footer isDesktop={props.isDesktop}/>
    </div>)
}

export default About;
