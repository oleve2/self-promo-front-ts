import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// styles
import footer from '../styles/Footer.module.scss';

// images
import footer_vk from '../public/footer/footer_vk.png';
import footer_telegram from '../public/footer/footer_telegram.png';
import footer_whatsapp from '../public/footer/footer_whatsapp.png';
import footer_youtube from '../public/footer/footer_youtube.png';


const Footer:FC = () => {
  return (<div className={footer.footer_wrapper}>
    <div className={footer.footer_block}>
      <div>© Психолог <span className={footer.footer__divBold}>Айгуль Дейнекина</span> | 2022</div>
      <div>г. Москва, ул. Академика Анохина, дом 2/7</div>
      <div className={footer.footer__divBold}>+7 (910) 430 8079</div>
      <div className={footer.footer__divBold}>aiguldein@mail.ru</div>
      <div className={footer.footer__iconsList}>
        <div className={footer.footer_iconImg}> <Image src={footer_vk} alt="VK" /> </div>
        <div className={footer.footer_iconImg}> <Image src={footer_telegram} alt="telegram" /> </div>
        <div className={footer.footer_iconImg}> <Image src={footer_whatsapp} alt="whatsapp" /> </div>
        <div className={footer.footer_iconImg}> <Image src={footer_youtube} alt="youtube" /> </div>
      </div>
    </div>

    <div className={footer.footer_block}>
        <div className={footer.footer__navlink}> <Link href='/'>Главная</Link> </div>
        <div className={footer.footer__navlink}> <Link href='/about_me'>Обо мне</Link> </div>
        <div className={footer.footer__navlink}> <Link href='#'>Консультация и терапия</Link> </div>
        <div className={footer.footer__navlink}> <Link href='/articles'>Статьи</Link> </div>
        <div className={footer.footer__navlink}> <Link href='#'>Отзывы</Link> </div>
        <div className={footer.footer__navlink}> <Link href='/rules'>Правила работы</Link> </div>
        <div className={footer.footer__navlink}> <Link href='#'>Контакты</Link> </div>

    </div>

    <div className={footer.footer_block}>
      <div className={footer.footer__otherLinks}>Яндекс. Карты</div>
      <div className={footer.footer__otherLinks}>Google Maps</div>
      <div className={footer.footer__otherLinks}>Оферта</div>
      <div className={footer.footer__otherLinks}>Оплата</div>
      <div className={footer.footer__disclaimer}>Все данные на сайте имеют ознакомительный характер и могут быть скорректированы автором в процессе.</div>
    </div>
  </div>)
}

export default Footer;
