import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// styles
import footer from './Footer.module.scss';
import ce from '../styles/CommonElements.module.scss';

// images
import footer_vk from '../public/footer/footer_vk.png';
import footer_telegram from '../public/footer/footer_telegram.png';
import footer_whatsapp from '../public/footer/footer_whatsapp.png';


interface FooterProps {
  isDesktop: boolean,
  backgroundColor?: string,
}


const Footer:FC<FooterProps> = (props) => {

  return (<>
  <div className={footer.footer_wrapper + (props.backgroundColor !== undefined ? " " + ce.div__bgBlue : "")} >
    <div className={footer.footer_block}>
      <div>© Психолог <span className={footer.footer__divBold}>Айгуль Дейнекина</span> | 2022</div>
      <div>г. Москва, Зубовский бульвар, д.13, с.1</div>
      <div>(ст. м. «Парк Культуры»)</div>
      <div> <a className={footer.footer__divBold} href={`tel:+79104308079`}>+7(910)430-8079</a> </div>
      <div> <a className={footer.footer__divBold} href={`mailto:aiguldein@mail.ru`}>aiguldein@mail.ru</a> </div>
      <div className={footer.footer__iconsList}>
        <div className={footer.footer_iconImg}> 
          <a href="https://vk.com/id4765286"><Image src={footer_vk} alt="VK" /> </a>  
        </div>

        <div className={footer.footer_iconImg}> 
          <a href="https://t.me/aigyldeynekina"> <Image src={footer_telegram} alt="telegram" />  </a> 
        </div>

        <div className={footer.footer_iconImg}> 
          <a href="https://api.whatsapp.com/send?phone=79104308079"> <Image src={footer_whatsapp} alt="whatsapp" /> </a>  
        </div>
      </div>
    </div>

    { props.isDesktop && 
    <div className={footer.footer_block}>
      <div className={footer.footer__navlink}> <Link href='/'>Главная</Link> </div>
      <div className={footer.footer__navlink}> <Link href='/about_me'>Обо мне</Link> </div>
      <div className={footer.footer__navlink}> <Link href='/#consult_therapy'>Консультация и терапия</Link> </div>
      <div className={footer.footer__navlink}> <Link href='/articles'>Статьи</Link> </div>
      <div className={footer.footer__navlink}> <Link href='/#feedbacks'>Отзывы</Link> </div>
      <div className={footer.footer__navlink}> <Link href='/rules'>Правила работы</Link> </div>
      <div className={footer.footer__navlink}> <Link href='/#contacts'>Контакты</Link> </div>
    </div>    
    }

    {/* props.isDesktop &&  */}
    <div className={footer.footer_block}>
      <div className={footer.footer__otherLinks}>
        <a href="https://yandex.ru/maps/213/moscow/house/zubovskiy_bulvar_vl13s1/Z04Ycw5iSkUEQFtvfXtydHtiZw==/?ll=37.592302%2C55.735713&z=17.08">Яндекс.Карты</a>
      </div>
      <div className={footer.footer__otherLinks}>
        <a href="https://www.google.com/maps/place/%D0%97%D1%83%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%B1-%D1%80,+13%D1%811,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+119021/@55.7357333,37.5903453,17z/data=!4m5!3m4!1s0x46b54ba67013d95b:0xac419fe738f5cdb2!8m2!3d55.7357696!4d37.5921799">Google Maps</a>
      </div>
      <div className={footer.footer__disclaimer}>Все данные на сайте имеют ознакомительный характер и могут быть скорректированы автором в процессе.</div>
    </div>    
    

  </div>
  </>)
}

export default Footer;
