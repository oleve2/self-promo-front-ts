import { FC } from "react";
import Link from 'next/link';

//import { HashLink } from 'react-router-hash-link';

import menu from './Menu.module.scss';

interface MenuProps {
  LinksList?: string[],
}

const Menu:FC<MenuProps> = (props) => {
  return (
    <>
    <nav className={menu.menu__nav}>
      <ul className={menu.menu__ul}>
        <li className={menu.menu__li}> <Link href='/'>Главная</Link> </li>
        <li className={menu.menu__li}> <Link href='/about_me'>Обо мне</Link> </li>
        <li className={menu.menu__li}> <Link href="/#consult_therapy" >Консультация и терапия</Link> </li>
        <li className={menu.menu__li}> <Link href='/articles'>Статьи</Link> </li>
        <li className={menu.menu__li}> <Link href='/#feedbacks'>Отзывы</Link> </li>
        <li className={menu.menu__li}> <Link href='/rules'>Правила работы</Link> </li>
        <li className={menu.menu__li}> <Link href='/contacts'>Контакты</Link> </li>
      </ul>
      
      <div className={menu.menu_phone}>+7 (910) 430 8079</div>
    </nav>
    </>
  )
}

export default Menu;
