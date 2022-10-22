import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ConsultCard from '../components/ConsultCard';
import ArticleCard from '../components/ArticleCard';
import CommunicationForm from '../components/CommunicationForm';
import Feedbacks from '../components/Feedbacks';

// style
import ce from '../styles/CommonElements.module.scss';
import homeP from '../styles/PageHome.module.scss';

// images
import portraitMain2 from '../public/homepage/DSC01634 copy 1.png';
import portraitAboutMe from '../public/homepage/DSC01782 copy 1.png';

import arrToLeft  from '../public/homepage/arrToLeft.png';
import arrToRight from '../public/homepage/arrToRight.png';
import arrowLI from '../public/homepage/ArrowLI.png';

// data
import { data_consults } from '../dataJson/consults';
import { data_articles } from '../dataJson/articles';


const Home: NextPage = () => {
  useEffect( () => {
    document.title = 'Психолог Айгуль Дейнекина';
  }, [])

  const router = useRouter();

  return (
    <div className={ce.rootWrapper}>
      <Menu/>
      <div className={ce.PageHeader2}></div>

      {/* элемент абсолютное позиционирование */}      
      <div className={homeP.personInfo_wrapper}>
        <div className={homeP.personInfo}>
          <div className={ce.div_textQuote}>Помогаю изменить жизнь... </div>
          <div className={homeP.personInfo__name}>Айгуль</div>
          <div className={homeP.personInfo__name}>Дейнекина</div>
          <div className={homeP.personInfo__titles}>Психолог, Гештальт и ЕМДТ терапевт</div>
          <div className={ce.btnSignUp}>Записаться</div>
        </div>

        <div className={homeP.img_portrait}>
          <Image src={portraitMain2} alt="portrait_home"/> 
        </div>
      </div>
     
      {/* кусок до полной страницы */}
      <div style={{height:'calc(100vh - 383px)', display:'flex'}}></div>

      <div className={ce.divPageH70W90}>
        <div className={ce.title_h2}>Я могу помочь</div>
        
        <ul className={homeP.help_ul}>
          <li className={homeP.help_li}>
            <Image src={arrowLI} alt="li"></Image>
            <div className={homeP.help_litext}>Решить жизненные задачи</div>
          </li>
          <li className={homeP.help_li}>
            <Image src={arrowLI} alt="li"></Image>
            <div className={homeP.help_litext}>Разобраться с детскими травмами</div>
          </li>
          <li className={homeP.help_li}>
            <Image src={arrowLI} alt="li"></Image>
            <div className={homeP.help_litext}>Эффективно пережить трудные моменты: развод, горе, измена, расставание, создание пары/семьи и становление родительства</div>
          </li>
        </ul>
      </div>
      
      <div className={ce.divPage}>
        <h2 className={ce.title_h2} id="consult_therapy">Консультации и терапия</h2>
        
        <div className="" style={{display:'flex', justifyContent:'space-between', marginBottom:'30px'}}>
          { data_consults.map( (item, index) => {
            return <ConsultCard key={index} img={item.img}
              title={item.title}
              aim={item.aim}
              duration={item.duration}
              online_offline={item.online_offline}
              price={item.price}
            />
          }) }
        </div>

        <div className={homeP.backgrrelative}></div>
      </div>

      <div style={{margin:'0 20px'}}>
        <div className={ce.div_textQuote}>Мы знаем, кто мы есть, но не знаем, кем мы можем быть</div>
      </div>

      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>Обо мне</h2>

        <div className={homeP.homeAbout__wrapper}>
          <div className={homeP.homeAbout__imgWrapper}>
            <Image src={portraitAboutMe} alt="портрет 2"/>
          </div>

          <div className={homeP.homeAbout__contentWrapper}>
            <div className={homeP.homeAbout__title}>Меня зовут <br />Айгуль Дейнекина</div>
            <div className={homeP.homeAbout__text}>Я EMDR, танцевально-двигательный  и гештальт-психотерапевт. Член ЕМДР-ассоциации. </div>
            <div className={homeP.homeAbout__text}>Более чем 15-лет успешно помогаю людям решать сложные задачи, связанные с уверенностью в себе, трудностями в отношениях, карьерным ростом и самореализацией. </div>
            <div className={homeP.homeAbout__text}>Психолог по призванию. Мне ценно работать честно, ясно и внимательно. </div>
            <div className={homeP.homeAbout__text}>Верю в способность каждого проживать свою жизнь наполнено, включенно, интересно.</div>
            <div className={homeP.homeAbout__text}>Помогу вам решить новые жизненные задачи, разобраться с детскими травмами, а также эффективно пережить трудные моменты в жизни: горе, развод, измена, расставание, создание семьи/пары, становление родительства, беременность и материнство и пр.</div>
            <div className={homeP.homeAbout__text}>Веду практику в Москве очно и онлайн.</div>
          
            <div className={ce.linkWithArrow} onClick={() => { router.push('/about_me') }}>Больше информации</div>
          </div>
        </div>
      </div>

      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>Статьи</h2>
        
        <div className={homeP.homeArticles__wrapper}>
        { data_articles.map( (item, index) => {
          return <ArticleCard key={index} img={item.img}
            title={item.title}
            textArr={item.text}
          />
        }) }
        </div>

        <div style={{display:'flex', marginTop:'40px', justifyContent:'center'}}>
          <div style={{display:'flex', width:'150px'}}>
            <div className={homeP.homeArticles__arrowWrapper}> <Image src={arrToLeft} alt="arrLeft"/> </div>
            <div className={homeP.homeArticles__arrowWrapper}> <Image src={arrToRight} alt="arrRight"/> </div>
          </div>
        </div>

        <div className={homeP.backgrrelative}></div>
      </div>


      <div style={{margin:'0 20px'}}>
        <div className={ce.div_textQuote}>Как басня, так и жизнь ценится не за длину, но за содержание.</div>
      </div>

        
      <div className={ce.divPageH70W90}>
        <h2 className={ce.title_h2} id="feedbacks">Отзывы</h2>
        <Feedbacks />
      </div>
        
      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>Запись на консультацию</h2>
        <CommunicationForm />
      </div>
     

      <Footer />
    </div>
  )
}

export default Home
