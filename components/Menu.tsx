import { FC, useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";

import menu from './Menu.module.scss';

// images
import close_img from '../public/common/close.png';

// interfaces (menu)
interface MenuProps {
  LinksList?: string[],
  isDesktop: boolean,
}

interface MenuLinksType {
  link: string,
  name: String,
}


//
const Menu:FC<MenuProps> = (props) => {
  const [menuOpened, setmenuOpened] = useState(false);

  const clickBM = () => {
    setmenuOpened(false);
  }

  const menuLinks: MenuLinksType[] = [
    {link: '/', name: 'Главная'},
    {link: '/about_me', name: 'Обо мне'},
    {link: '/#consult_therapy', name: 'Консультация и терапия'},
    {link: '/articles', name: 'Статьи'},
    {link: '/#feedbacks', name: 'Отзывы'},
    {link: '/rules', name: 'Правила работы'},
    {link: '/#contacts', name: 'Контакты'},
  ]

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
                { menuLinks.map( (item, index) => {
                  return <li key={index} onClick={() => {clickBM()}} > <Link href={item.link}>{item.name}</Link> </li>
                }) } 
              </ul>
            </div>
          </div>
          }
        </>
      }
      
      { props.isDesktop && 
      <ul className={menu.menu__ul}>
        { menuLinks.map( (item, index) => {
          return <li key={index} className={menu.menu__li} onClick={() => {clickBM()}}> 
            <Link href={item.link}>{item.name}</Link> 
          </li>
        }) }
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
