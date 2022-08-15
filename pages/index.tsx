import type { NextPage } from 'next'
import Image from 'next/image';

// components
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import ConsultCard from '../components/ConsultCard';
import ArticleCard from '../components/ArticleCard';
import CommForm from '../components/CommForm';
import Feedbacks from '../components/Feedbacks';

// style
import homeP from '../styles/Home.module.scss';

// images
import portraitMain from '../public/homepage/DSC01658 copy 1.png';
import portraitFlowers from '../public/homepage/DSC01627 1.png';
import arrToLeft  from '../public/homepage/arrToLeft.png';
import arrToRight from '../public/homepage/arrToRight.png';


const Home: NextPage = () => {
  const LinksList: string[] = ['1','2','3'];

  return (
    <div>
      <div className={homeP.PageHeader}>
        <Menu LinksList={LinksList}/>

        <div className={homeP.div_textQuote}>«Помогаю изменить жизнь...» </div>
      </div>

      <main className={homeP.divMain}>
        <div className={homeP.img_portrait}>
          <Image src={portraitMain} alt="портрет 1"></Image>
        </div>
        
        <div className={homeP.personInfo}>
          <div className={homeP.personInfo__name}>Айгуль</div>
          <div className={homeP.personInfo__name}>Дейнекина</div>
          <div className={homeP.personInfo__titles}>Психолог, Гештальт и ЕМДТ терапевт</div>
          <div className={homeP.btnSignUp}>Записаться</div>
        </div>

        <div className={homeP.divPageW90}>
          <h2 className={homeP.title_h2}>Консультации и терапия</h2>
          
          <div className="" style={{display:'flex', justifyContent:'space-between'}}>
            <ConsultCard />
            <ConsultCard />
            <ConsultCard />
          </div>
        </div>
        
        <div>
          <div className={homeP.div_textQuote}>«Мы знаем, кто мы есть, но не знаем, кем мы можем быть.» </div>
          <div className={homeP.div_textQuoteAuthor}>(Вильям Шекспир)</div>
        </div>

        <div className={homeP.divPageW90}>
          <h2 className={homeP.title_h2}>Обо мне</h2>

          <div className={homeP.homeAbout__wrapper}>
            <div className={homeP.homeAbout__imgWrapper}>
              <Image src={portraitFlowers} alt="портрет 2"/>
            </div>

            <div className={homeP.homeAbout__contentWrapper}>
                <div className={homeP.homeAbout__title}>Меня зовут Айгуль Дейнекина</div>
                <div className={homeP.homeAbout__text}>Я EMDR, танцевально-двигательный  и гештальт-психотерапевт. Член ЕМДР-ассоциации. </div>
                <div className={homeP.homeAbout__text}>Более чем 15-лет успешно помогаю людям решать сложные задачи, связанные с уверенностью в себе, трудностями в отношениях, карьерным ростом и самореализацией. </div>
                <div className={homeP.homeAbout__text}>Психолог по призванию. Мне ценно работать честно, ясно и внимательно. </div>
                <div className={homeP.homeAbout__text}>Верю в способность каждого проживать свою жизнь наполнено, включенно, интересно.</div>
                <div className={homeP.homeAbout__text}>Помогу вам решить новые жизненные задачи, разобраться с детскими травмами, а также эффективно пережить трудные моменты в жизни: горе, развод, измена, расставание, создание семьи/пары, становление родительства, беременность и материнство и пр.</div>
                <div className={homeP.homeAbout__text}>Веду практику в Москве очно и онлайн.</div>
              
                <div className={homeP.linkWithArrow}>Больше информации</div>
            </div>
          </div>
        </div>


        <div className={homeP.divPage}>
          <h2 className={homeP.title_h2}>Статьи</h2>
          
          <div className={homeP.homeArticles__wrapper}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
          <div className={homeP.homeArticles__wrapper}>
            <div className={homeP.homeArticles__arrowWrapper}> <Image src={arrToLeft} alt="arrLeft"/> </div>
            <div className={homeP.homeArticles__arrowWrapper}> <Image src={arrToRight} alt="arrRight"/> </div>
          </div>
        </div>


        <div>
          <div className={homeP.div_textQuote}>«Как басня, так и жизнь ценится не за длину, но за содержание.» </div>
          <div className={homeP.div_textQuoteAuthor}>(Луций Анней Сенека)</div>
        </div>

        
        <div className={homeP.divPageH70W90}>
          <h2 className={homeP.title_h2}>Отзывы</h2>

          <Feedbacks />
        </div>
        
        <div className={homeP.divPage}>
          <h2 className={homeP.title_h2}>Запись на консультацию</h2>

          <CommForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
