import { FC, useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";

import menu from './Menu.module.scss';

// images
import close_img from '../public/common/close.png';

interface MenuProps {
  LinksList?: string[],
  isDesktop: boolean,
}

const Menu:FC<MenuProps> = (props) => {
  const [menuOpened, setmenuOpened] = useState(false);

  return (
    <>
    <nav className={menu.menu__nav}>
      { !props.isDesktop &&
        <>
          <div className={menu.burger_btn} onClick={() => { setmenuOpened(true) }}>
            <span/>
          </div> 

          {
          menuOpened && <div className={menu.burger_menu}>
            <div className={menu.burger_menuContent}>
              <div className={menu.closeImg_wrapper}
                onClick={() => { setmenuOpened(false) }}
              >
                <Image src={close_img} alt="close"></Image>
              </div>

              <ul className={menu.burger_menuContent_ul}>
                <li > <Link href='/'>Главная</Link> </li>
                <li > <Link href='/about_me'>Обо мне</Link> </li>
                <li > <Link href="/#consult_therapy" >Консультация и терапия</Link> </li>
                <li > <Link href='/articles'>Статьи</Link> </li>
                <li > <Link href='/#feedbacks'>Отзывы</Link> </li>
                <li > <Link href='/rules'>Правила работы</Link> </li>
                <li > <Link href='/contacts'>Контакты</Link> </li>
              </ul>
            </div>
          </div>
          }
        </>
      }
      
      { props.isDesktop && 
      <ul className={menu.menu__ul}>
        <li className={menu.menu__li}> <Link href='/'>Главная</Link> </li>
        <li className={menu.menu__li}> <Link href='/about_me'>Обо мне</Link> </li>
        <li className={menu.menu__li}> <Link href="/#consult_therapy" >Консультация и терапия</Link> </li>
        <li className={menu.menu__li}> <Link href='/articles'>Статьи</Link> </li>
        <li className={menu.menu__li}> <Link href='/#feedbacks'>Отзывы</Link> </li>
        <li className={menu.menu__li}> <Link href='/rules'>Правила работы</Link> </li>
        <li className={menu.menu__li}> <Link href='/contacts'>Контакты</Link> </li>
      </ul>
      }
      
      <div>
        <a className={menu.menu_phone} href={`tel:+79104308079`}>+7(910)4308079</a>
      </div>
    </nav>
    </>
  )
}

export default Menu;
