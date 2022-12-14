import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// components (static import)
/*
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ConsultCard from '../components/ConsultCard';
import ArticleCard from '../components/ArticleCard';
import CommunicationForm from '../components/CommunicationForm';
import Feedbacks from '../components/Feedbacks';
import MobileSlider from '../components/MobileSlider';
import FeedbackCard from '../components/FeedbackCard';
*/

// components (dynamic import)
const Menu              = dynamic(() => import('../components/Menu'));
const Footer            = dynamic(() => import('../components/Footer'));
const ConsultCard       = dynamic(() => import('../components/ConsultCard'));
const ArticleCard       = dynamic(() => import('../components/ArticleCard')); 
const CommunicationForm = dynamic(() => import('../components/CommunicationForm')); 
const Feedbacks         = dynamic(() => import('../components/Feedbacks')); 
const MobileSlider      = dynamic(() => import('../components/MobileSlider')); 
const FeedbackCard      = dynamic(() => import('../components/FeedbackCard')); 


// style
import ce from '../styles/CommonElements.module.scss';
import homeP from '../styles/PageHome.module.scss';

// images
import portraitMain2 from '../public/homepage/DSC01634 copy 1.webp';
import portraitAboutMe from '../public/homepage/DSC01782 copy 1.webp';
import arrowLI from '../public/homepage/ArrowLI.png';

// data
import { data_consults } from '../dataJson/consults';
import { data_articles } from '../dataJson/articlesHomepage';
import { data_feedbacks } from '../dataJson/feedbacks';

import { PageProps } from '../models/PageModel'; 

const Home: NextPage<PageProps> = (props) => {
  const router = useRouter();

  // articles mobile slider ----------------------
  const articleSilderArray = Array.from(Array(data_articles.length).keys());
  const [articleNumActive, setarticleNumActive] = useState(0);
  const [articleActive, setarticleActive] = useState(data_articles[articleNumActive])

  const updateArticleActive = (num: number) => {
    setarticleNumActive(num);
    setarticleActive(data_articles[num]);
  }
  // ---------------------------------------------
  // feedbacks mobile slider ----------------------
  const feedbacksSilderArray = Array.from(Array(data_feedbacks.length).keys());
  const [feedbackNumActive, setfeedbackNumActive] = useState(0);
  const [feedbackActive, setfeedbackActive] = useState(data_feedbacks[feedbackNumActive])

  const updateFeedbackActive = (num: number) => {
    setfeedbackNumActive(num);
    setfeedbackActive(data_feedbacks[num]);
  }

  // type of consulttion booked
  const [consultType, setconsultType] = useState('');

  // ---------------------------------------------

  //
  return (
    <div className={ce.rootWrapper}>
      <Head>
        <title>???????????????? ???????????? ??????????????????, ????????????, EDMR, ?????????????????????????????? ????????????????????????</title>
        <meta 
          name="description"
          content="???????????????? ???????????? ??????????????????, ????????????, EDMR, ?????????????????????????????? ????????????????????????"
          key="desc"
          />        
      </Head>

      <Menu isDesktop={props.isDesktop}/>
      <div className={ce.PageHeader2}></div>

      
      <div className={homeP.personInfo_wrapper}>
        <div className={homeP.personInfo}>
          { props.isDesktop && <div className={ce.div_textQuote}>???????????? ????????????????  ??????????</div> }

          <div className={homeP.personInfo__name}>????????????</div>

          <div className={homeP.personInfo__name}>??????????????????</div>

          <div className={homeP.personInfo__titles}>????????????????, ???????????????? ?? ???????? ????????????????</div>

          { props.isDesktop && 
            <div className={ce.btnSignUp}>
              <Link href="/#book_consultation">????????????????????</Link>
            </div> 
          }
        </div>
        
        <div className={homeP.img_portrait}>
          <Image src={portraitMain2} alt="portrait_home"/> 
        </div>
      </div>    
      
      <div style={{height:'150px'}}></div>
  
      <div style={{position:'relative'}}> 
        <div className={ce.title_h2}>?? ???????? ????????????:</div>
      </div>

      <div className={ce.divPageH70 + " " + ce.div__bgBlue}>

        <ul className={homeP.help_ul}>
          <li className={homeP.help_li}>
            <div className={homeP.help_imgwrapper}> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>???????????? ???????????????????? ?????????????????? ????????????</div>
          </li>
          <li className={homeP.help_li}>
            <div> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>???????????????????????? ????????????, ??????????????, ????????????</div>
          </li>
          <li className={homeP.help_li}>
            <div className={homeP.help_imgwrapper}> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>???????????????? ?????????????? ??????????????: ????????????, ??????????????????????, ??????????????????</div>
          </li>
          <li className={homeP.help_li}>
            <div className={homeP.help_imgwrapper}> <Image src={arrowLI} alt="li"></Image> </div>
            <div className={homeP.help_litext}>???????????????? ???????????????????? ?? ???????????????? ?????????????????????? ?? ????????</div>
          </li>          
        </ul>
      </div>
      
      
      <div className={ce.divPage}>
        <h2 className={ce.title_h2} id="consult_therapy">???????????????????????? ?? ??????????????</h2>
        
        <div className={homeP.homeConsultations_wrapper}>
          { data_consults.map( (item, index) => {
            return <ConsultCard key={index} img={item.img}
              title={item.title}
              aim={item.aim}
              duration={item.duration}
              online_offline={item.online_offline}
              price={item.price}
              isdesktop={props.isDesktop}
              funcSetconsultType={setconsultType}
            />
          }) }
        </div>

        { props.isDesktop && <div className={ce.backgrrelative}></div> }
      </div>
      

      <div style={{margin:'0 20px'}}>
        <div className={ce.div_textQuote}>???? ??????????, ?????? ???? ????????, ???? ???? ??????????, ?????? ???? ?????????? ????????</div>
      </div>
      
      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>?????? ??????</h2>

        <div className={homeP.homeAbout__wrapper}>
          <div className={homeP.homeAbout__imgWrapper}>
            <Image src={portraitAboutMe} alt="?????????????? 2"/>
          </div>

          <div className={homeP.homeAbout__contentWrapper}>
            <div className={homeP.homeAbout__title}>
              ???????? ?????????? <br />???????????? ??????????????????
            </div>
            <div className={homeP.homeAbout__text}>
              ?? EMDR ?? ????????????????-??????????????????????????. ???????? ????????-????????????????????.
            </div>
            
            <div className={homeP.homeAbout__text}>
              ?????????? ?????? 15-?????? ?????????????? ?????????????? ?????????? ???????????? ?????????????? ????????????, ?????????????????? ?? ???????????????????????? ?? ????????, ?????????????????????? ?? ????????????????????, ?????????????????????? ?????????????????????? ?? ??????????????????????????????.
            </div>
            
            <div className={homeP.homeAbout__text}>
              ???????????????? ???? ??????????????????. ?????? ?????????? ???????????????? ????????????, ???????? ?? ??????????????????????. 
            </div>
            
            <div className={homeP.homeAbout__text}>
              ???????? ?? ?????????????????????? ?????????????? ?????????????????? ???????? ?????????? ??????????????????, ??????????????????, ??????????????????.
            </div>
            
            <div className={homeP.homeAbout__text}>
              ???????????? ?????? ???????????? ?????????? ?????????????????? ????????????, ?????????????????????? ?? ???????????????? ?? ?????????????????????? ?????????????????????? ?? ????????, ?? ?????????? ???????????????????? ???????????????? ?????????????? ?????????????? ?? ??????????: ????????????, ??????????????????????, ?????????????????? ?? ????????????????????.              
            </div>
            
            <div className={homeP.homeAbout__text}>
              ???????? ???????????????? ?? ???????????? ???????? ?? ????????????.
            </div>

            <div className={homeP.homeAbout__text}>
              ?????????????????? ?????????????? ???????????????????????????????? ????????????????????????, ???????????????? ?? ???????????????????? ?? ????????????????????????, ?????????????? ???????????????????? ?? ???????????? ??????????????. 
            </div>

            <div className={ce.linkWithArrow} onClick={() => { router.push('/about_me') }}>
              <span className={ce.linkWithArrow__text}>???????????? ????????????????????</span>
            </div>
          </div>
        </div>
      </div>

      <div className={ce.divPage}>
        <h2 className={ce.title_h2}>????????????</h2>
        
        { props.isDesktop && <>
          <div className={homeP.homeArticles__wrapper}>
            { data_articles.map( (item) => {
            return <ArticleCard key={item.id} data={item} />
            }) }
          </div>
          </>
        }

        { !props.isDesktop && 
        <div className={homeP.homeArticles__wrapper}>
          <MobileSlider
            itemNumActive={articleNumActive}
            funcUpdateItemactive={updateArticleActive}
            arraySlider={articleSilderArray}
          > 
            <ArticleCard data={articleActive} />
          </MobileSlider>        
        </div>
        }

        <div style={{display:'flex', justifyContent:'center', margin:'20px auto'}}>
          <div className={ce.btnSignUp}>
            <Link href="/articles">???????????? ????????????</Link>
          </div>            
        </div>

        { <div className={ce.backgrrelative}></div> } 
      </div>


      <div style={{margin:'0 20px'}}>
        <div className={ce.div_textQuote}>?????? ??????????, ?????? ?? ?????????? ?????????????? ???? ???? ??????????, ???? ???? ????????????????????.</div>
      </div>

        
      <div className={ce.divPageH70}>
        <h2 className={ce.title_h2} id="feedbacks">????????????</h2>
        
        { props.isDesktop && 
        <Feedbacks />
        }
        { !props.isDesktop && 
        <MobileSlider
            itemNumActive={feedbackNumActive}
            funcUpdateItemactive={updateFeedbackActive}
            arraySlider={feedbacksSilderArray}
          > 
          <FeedbackCard 
            feedbackActive={feedbackActive}
          />
          </MobileSlider> 
        }
      </div>
        
      <div className={ce.divPage}>
        <h2 className={ce.title_h2} id="book_consultation">???????????? ???? ????????????????????????</h2>

        <CommunicationForm 
          consType={consultType}
        />
      </div>
      
      <div id="contacts">
        <Footer isDesktop={props.isDesktop} />  
      </div>
    </div>
  )
}

export default Home
