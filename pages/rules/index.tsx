import { FC } from "react";
import Image, { StaticImageData } from "next/image";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import RulesCard from "../../components/RulesCard";


// styles
import rulesP from '../../styles/Rules.module.scss';
import aboutP from '../../styles/AboutMe.module.scss';
import homeP from '../../styles/Home.module.scss';

// images
import imgStones from '../../public/pageRules/imgStones.png';
import rul_1 from '../../public/pageRules/rules_1_cons.png'
import rul_2 from '../../public/pageRules/rules_2_freq.png'
import arrowToRight from '../../public/homepage/arrToRight.png';


const Rules:FC = () => {
  const dataRules = [
    {
      id:1, 
      title:"Как попасть на консультацию", 
      text:"После отправленного запроса на консультации вы в течении дня, но не позднее 24 часа, получаете ответное сообщение с вариантами для записи. После согласования удобного для вас времени встречи и оплаты первой встречи вы получаете чек и время за вами зарезервировано."
    },
    {
      id:2, 
      title:"Частота встреч и завершение", 
      text:"Отмена сессии или ее перенос возможны не позднее, чем за 24 часа до назначенного времени. В случае более поздней отмены пропущенная сессия оплачивается в полном размере. Это правило действует для всех форматов работы. Если поздняя отмена или перенос происходят по инициативе психотерапевта, то следующая встреча будет бесплатной для вас. Правило 24 часов касается любых ситуаций, в том числе уважительных и форс-мажорных и для клиента, и для терапевта. В случае опоздания продолжительность сессии не увеличивается. Если вы предупреждаете об опоздании, то в рамках забронированного за вами времени я ожидаю вас и мы работаем до конца сессионного часа. В случае, если вы не предупреждаете об опоздании, то ожидаю вас 15 минут и считаю сессию состоявшейся и подлежащей оплате."
    },
    {
      id:3, 
      title:"Отмены, пропуски, переносы", 
      text:"adasdasdas"
    },
    {
      id:4, 
      title:"Конфиденциальность", 
      text:"Психолог руководствуется этическим кодексом психолога и соблюдает правило конфиденциальности. Если вы случайно встретитесь очно со своим терапевтом, то вы решаете как реагировать. "
    },
    {
      id:5, 
      title:"Ограничения", text:"tyerterterter"
    },
    
    {
      id:6, 
      title:"Стоимость и способы оплаты", text:""
    },
    {
      id:7, 
      title:"Контакты между встречами", text:""
    },
    {
      id:8, 
      title:"Напоминания о встречах", text:""
    },
    {
      id:9, 
      title:"Перерывы в работе", text:""
    },
    {
      id:10, 
      title:"Клиент-терапевтические отношения", text:""
    },
    {
      id:11, 
      title:"Алкоголь и другие психоактивные вещества", text:""
    },
    {
      id:12, 
      title:"Отказ в работе", text:""
    }
    /**/
  ]

  // выбираем картинку по id
  const choosePic = (id: Number): StaticImageData => {
    if (id === 1) {return rul_1}
    if (id === 2) {return rul_2}
    return rul_1;
  }


  //
  return (<div>
    <div className={rulesP.PageHeader}>
      <Menu />

      <div>
          <div className={homeP.div_textQuote}>Предварительная договорённость избавляет от недопонимания в дальнейшем </div>
          {/*<div className={homeP.div_textQuoteAuthor}>(М. Ганди)</div>*/}
      </div>      
    </div>  
  
    <div className={aboutP.about_header} style={{top:'250px'}}>
        <div className={aboutP.about_header__content}>
          {/*<div className={rulesP.rules_line_wrapper}></div>*/}
            <div className={rulesP.rules_line}>
              <div>Рекомендуемая частота встреч для эффективной терапии</div>
              <div>
                <Image src={arrowToRight} />
              </div>
              <div>1 раз в неделю</div>
            </div>
            <div className={rulesP.rules_line}>
              <div>В случае острой ситуации, кризиса</div>
              <div>
                <Image src={arrowToRight} />
              </div>
              <div>2 раза в неделю</div>
            </div>
            <div className={rulesP.rules_line}>
              <div>После выхода в стабильное состояние</div>
              <div>
                <Image src={arrowToRight} />
              </div>
              <div>1 раз в неделю</div>
            </div>          
            <div className={rulesP.rules_line}>
              <div>Поддерживающий характер, не предполагает значительный психотерапевтический эффект</div>
              <div>
                <Image src={arrowToRight} />
              </div>
              <div>реже 1 раза в неделю</div>
            </div>
          
        </div>

        <div className={aboutP.about_header__image}>
          <Image src={imgStones} alt="stones"/>
        </div>        
      </div>

      <main>
        <div style={{height:'calc(100vh - 383px)', display:'flex'}}></div>

        <div className={homeP.divPage}>
          <h2 className={homeP.title_h2}>Правила работы</h2>

          <div className={rulesP.rules_divCenter}>
            Пожалуйста, прежде чем записаться на встречу, ознакомьтесь с правилами сотрудничества.
          </div>
          
          {/* тут будет список компонентов карточка инфы */}
          <div className={rulesP.rules_divCenter}>
          { dataRules.map( (item) => {
            return <RulesCard key={item.id} pic={choosePic(item.id)} title={item.title} text={item.text}/>
          }) }
          </div>
        </div>
          

      </main>

    <Footer />
  </div>)
}

export default Rules;
