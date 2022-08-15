import { FC } from "react";
import Image from "next/image";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import CommForm from "../../components/CommForm";

// style
import aboutP from '../../styles/AboutMe.module.scss';
import homeP from '../../styles/Home.module.scss';

// images
import portrAboutMe from '../../public/pageAboutMe/aboutme_portrait.png';
import dipl1 from '../../public/pageAboutMe/dipl1.png';
import dipl2 from '../../public/pageAboutMe/dipl2.png';
import dipl3 from '../../public/pageAboutMe/dipl3.png';
import dipl4 from '../../public/pageAboutMe/dipl4.png';
import imgAim from '../../public/pageAboutMe/imageAim.png';


const About:FC = () => {
  return (
    <div>
      <div className={aboutP.PageHeader}>
        <Menu />
      </div>  

      <div className={aboutP.about_header}>
        <div className={aboutP.about_header__image}>
          <Image src={portrAboutMe} alt="portrarait2"/>
        </div>
        
        <div className={aboutP.about_header__content}>
          <div className={homeP.homeAbout__title}>Меня зовут <br /> Айгуль Дейнекина</div>
          <div className={homeP.homeAbout__text}>Я EMDR, танцевально-двигательный  и гештальт-психотерапевт. Член ЕМДР-ассоциации. </div>
          <div className={homeP.homeAbout__text}>Более чем 15-лет успешно помогаю людям решать сложные задачи, связанные с уверенностью в себе, трудностями в отношениях, карьерным ростом и самореализацией. </div>
          <div className={homeP.homeAbout__text}>Психолог по призванию. Мне ценно работать честно, ясно и внимательно. </div>
          <div className={homeP.homeAbout__text}>Верю в способность каждого проживать свою жизнь наполнено, включенно, интересно.</div>
          <div className={homeP.homeAbout__text}>Помогу вам решить новые жизненные задачи, разобраться с детскими травмами, а также эффективно пережить трудные моменты в жизни: горе, развод, измена, расставание, создание семьи/пары, становление родительства, беременность и материнство и пр.</div>
          <div className={homeP.homeAbout__text}>Веду практику в Москве очно и онлайн.</div>
        </div>
      </div>

      <main>
        <div style={{height:'calc(100vh - 383px)', display:'flex'}}></div>

        <div>
          <div className={homeP.div_textQuote}>«Грамм собственного опыта стоит дороже тонны чужих наставлений!»</div>
          <div className={homeP.div_textQuoteAuthor}>(М. Ганди)</div>
        </div>

        <div className={homeP.divPageW90} style={{backgroundColor:'#EEF7FF'}}>
          <h2 className={homeP.title_h2}>Квалификации</h2>

          <div className={aboutP.about_qualif_div}>
            <div className={aboutP.about_qualif_card}>
              <div className={aboutP.about_qualif_card__title}>Психолог</div>
              <div className={aboutP.about_qualif_card__text}>«Московский гуманитарный университет», специалист по направлению «Психология», специализация «Психология креативного развития человека (и его потенциала)», диплом с отличием.</div>
              <div className={aboutP.about_qualif_card__img}> 
                <Image src={dipl1} alt="dipl1"/> 
              </div>
            </div>

            <div className={aboutP.about_qualif_card}>
              <div className={aboutP.about_qualif_card__title}>Педагог-психолог</div>
              <div className={aboutP.about_qualif_card__text}>«Московский гуманитарный университет», специалист по направлению «Педагогика и психология», специализация «Менеджмент в образовании», диплом с отличием.</div>
              <div className={aboutP.about_qualif_card__img}> 
                <Image src={dipl2} alt="dipl2"/> 
              </div>              
            </div>

            <div className={aboutP.about_qualif_card}>
              <div className={aboutP.about_qualif_card__title}>Танцевально-двигательный психотерапевт</div>
              <div className={aboutP.about_qualif_card__text}>«Институт Практической психологии и Психоанализа», специалист в сфере практической психологии и психокоррекции, диплом с отличием.</div>
              <div className={aboutP.about_qualif_card__img}> 
                <Image src={dipl3} alt="dipl3"/> 
              </div>              
            </div>

            <div className={aboutP.about_qualif_card} >
              <div className={aboutP.about_qualif_card__title}>Гештальт-терапевт</div>
              <div className={aboutP.about_qualif_card__text}>Повышение квалификации в «МИГИП» по программе «Введение в гештальт-консультирование и гештальт — терапию. Контакт с собой и другими».</div>
              <div className={aboutP.about_qualif_card__img}> 
                <Image src={dipl4} alt="dipl4"/> 
              </div>              
            </div>                                    
          </div>

          <div>
            <div style={{margin:'40px 40px 20px 60px'}}>
              <span style={{textTransform:'uppercase', fontWeight:'bold'}}>Повышение квалификаций:</span> более 20 курсов и программ.
            </div>

            <div className={aboutP.about_qualif_div}>
              <div className={aboutP.about_qualif_card__img}>  <Image src={dipl4} alt="dipl4"/> </div>
              <div className={aboutP.about_qualif_card__img}>  <Image src={dipl4} alt="dipl4"/> </div>
              <div className={aboutP.about_qualif_card__img}>  <Image src={dipl4} alt="dipl4"/> </div>
              <div className={aboutP.about_qualif_card__img}>  <Image src={dipl4} alt="dipl4"/> </div>
            </div>
          </div>
        </div>

        <div className={aboutP.divPageFitCont}>
          <h2 className={homeP.title_h2}></h2>

          <div style={{display:'grid', gridTemplateColumns:'1fr 250px'}}>
            <div className={aboutP.div_textQuote}>«Цель моей работы — помогать идти к себе свободному, настоящему, реализованному.»</div>

            <div className={aboutP.BB1}> 
              <Image src={imgAim} alt="imgAim"/> 
            </div>
          </div>
        </div>          

        <div className={aboutP.divPageW90}>
          <h2 className={homeP.title_h2}>Запись на консультацию</h2>

          <CommForm />
        </div>

      </main>

      <Footer />
    </div>)
}

export default About;
