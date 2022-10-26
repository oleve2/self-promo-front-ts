import { FC } from "react";
import { useEffect, useState } from 'react';

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Contacts:FC = () => {
  const windim = useWindowDimensions();
  const [isDesktop, setisDesktop] = useState(false);
  const mobBP : number= +process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT!;

  useEffect( () => {
    if (windim !== undefined) {
      if (windim.width! >= mobBP ) {
        setisDesktop(true);
      } else {
        setisDesktop(false)
      }
    }
  },[windim, mobBP])


  useEffect( () => {
    document.title = 'Психолог Айгуль Дейнекина: Контакты';
  }, [])

  return (
    <div className={ce.rootWrapper}>
      <Menu isDesktop={isDesktop}/>

      <div style={{height:'100vh'}}>
        page contacts (under construction)
      </div>

      <Footer isDesktop={isDesktop}/>
    </div>
  )
}

export default Contacts;
