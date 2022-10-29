import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

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


import { PageProps } from '../models/PageModel'; 

const Home: NextPage<PageProps> = (props) => {
  const router = useRouter();


  return (
    <div className={ce.rootWrapper}>
      <Head>
        <title>Психолог Айгуль Дейнекина, Москва, EDMR, Психологические консультации</title>
        <meta 
          name="description"
          content="Психолог Айгуль Дейнекина, Москва, EDMR, Психологические консультации"
          key="desc"
          />        
      </Head>

      <Menu isDesktop={props.isDesktop}/>
      <div className={ce.PageHeader2}></div>

      
      <div className={homeP.personInfo_wrapper}>
        <div className={homeP.personInfo}>
          { props.isDesktop && <div className={ce.div_textQuote}>Помогу изменить  жизнь</div> }

          <div className={homeP.personInfo__name}>Айгуль</div>

          <div className={homeP.personInfo__name}>Дейнекина</div>

          <div className={homeP.personInfo__titles}>Психолог, Гештальт и ЕМДТ терапевт</div>

          { props.isDesktop && <div className={ce.btnSignUp}>Записаться</div> }
        </div>
        
        <div className={homeP.img_portrait}>
          <Image src={portraitMain2} alt="portrait_home"/> 
        </div>
        
      </div>    
      
      <div style={{height:'150px'}}></div>
  
      
      <div className={ce.divPageH70}>
        <div className={ce.title_h2}>Я могу помочь:</div>
        
        <ul className={homeP.help_ul}>
          <li className={homeP.help_li}>
            <div className={homeP.help_imgwrapper}> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>Решить актуальные жизненные задачи</div>
          </li>
          <li className={homeP.help_li}>
            <div> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>Переработать травмы, тревоги, страхи</div>
          </li>
          <li className={homeP.help_li}>
            <div className={homeP.help_imgwrapper}> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>Пережить трудные моменты: потери, расставания, отношения</div>
          </li>
          <li className={homeP.help_li}>
            <div className={homeP.help_imgwrapper}> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>Укрепить самооценку и повысить уверенность в себе</div>
          </li>          
        </ul>
      </div>
      
      
      <div className={ce.divPage}>
        <h2 className={ce.title_h2} id="consult_therapy">Консультации и терапия</h2>
        
        <div className={homeP.homeConsultations_wrapper}>
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

        { props.isDesktop && <div className={ce.backgrrelative}></div> }
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
            <div className={homeP.homeAbout__title}>
              Меня зовут <br />Айгуль Дейнекина
            </div>
            <div className={homeP.homeAbout__text}>
              Я EMDR и гештальт-психотерапевт. Член ЕМДР-ассоциации.
            </div>
            
            <div className={homeP.homeAbout__text}>
              Более чем 15-лет успешно помогаю людям решать сложные задачи, связанные с уверенностью в себе, трудностями в отношениях, личностными изменениями и самореализацией.
            </div>
            
            <div className={homeP.homeAbout__text}>
              Психолог по призванию. Мне ценно работать честно, ясно и внимательно. 
            </div>
            
            <div className={homeP.homeAbout__text}>
              Верю в способность каждого проживать свою жизнь наполнено, включенно, интересно.
            </div>
            
            <div className={homeP.homeAbout__text}>
              Помогу вам решить новые жизненные задачи, разобраться с травмами и негативными убеждениями о себе, а также эффективно пережить трудные моменты в жизни: потери, расставания, сложности в отношениях.              
            </div>
            
            <div className={homeP.homeAbout__text}>
              Веду практику в Москве очно и онлайн.
            </div>

            <div className={homeP.homeAbout__text}>
              Постоянно повышаю профессиональную квалификацию, участвую в интенсивах и конференциях, посещаю супервизии и личную терапию. 
            </div>

            <div className={ce.linkWithArrow} onClick={() => { router.push('/about_me') }}>
              Больше информации
            </div>
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

        {/*<div style={{display:'flex', marginTop:'40px', justifyContent:'center'}}>
          <div style={{display:'flex', width:'150px'}}>
            <div className={homeP.homeArticles__arrowWrapper}> <Image src={arrToLeft} alt="arrLeft"/> </div>
            <div className={homeP.homeArticles__arrowWrapper}> <Image src={arrToRight} alt="arrRight"/> </div>
          </div>
        </div>*/}

        { props.isDesktop && <div className={ce.backgrrelative}></div> }
      </div>


      <div style={{margin:'0 20px'}}>
        <div className={ce.div_textQuote}>Как басня, так и жизнь ценится не за длину, но за содержание.</div>
      </div>

        
      <div className={ce.divPageH70}>
        <h2 className={ce.title_h2} id="feedbacks">Отзывы</h2>
        <Feedbacks />
      </div>
        
      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>Запись на консультацию</h2>
        <CommunicationForm />
      </div>
      
      <div id="contacts">
        <Footer isDesktop={props.isDesktop} />  
      </div>
    </div>
  )
}

export default Home
