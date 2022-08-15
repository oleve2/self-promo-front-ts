import { FC } from "react";
import Link from 'next/link';

import menu from '../styles/Menu.module.scss';

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
        <li className={menu.menu__li}> <Link href='#'>Консультация и терапия</Link> </li>
        <li className={menu.menu__li}> <Link href='/articles'>Статьи</Link> </li>
        <li className={menu.menu__li}> <Link href='#'>Отзывы</Link> </li>
        <li className={menu.menu__li}> <Link href='/rules'>Правила работы</Link> </li>
        <li className={menu.menu__li}> <Link href='#'>Контакты</Link> </li>
      </ul>
      
      <div>телефон</div>
    </nav>
    </>
  )
}

export default Menu;
