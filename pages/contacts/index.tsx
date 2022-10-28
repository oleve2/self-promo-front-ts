import { FC } from "react";
import { useEffect, useState } from 'react';
import Head from "next/head";

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
    <Head>
      <title>Психолог Айгуль Дейнекина - Контакты</title>
      <meta 
        name="description"
        content="Психолог Айгуль Дейнекина - Контакты"
        key="desc"
        />        
    </Head>      
      <Menu isDesktop={isDesktop}/>
      <div className={ce.PageHeader2}></div> 

      <div style={{height:'100vh'}}>
        page contacts (under construction)
      </div>

      <Footer isDesktop={isDesktop}/>
    </div>
  )
}

export default Contacts;
