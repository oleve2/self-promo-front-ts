import { FC } from "react";
import Link from "next/link";

import { useState, useEffect } from "react";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';
import homeP from '../../styles/PageHome.module.scss';

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// data
import { LinkList } from "../../dataJson/articles_total";

// types
import { LinkListType } from "../../models/ArticleModels";

const Articles:FC = () => {
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
  
  
  const numsLinks = () => {
    let arr: LinkListType[] = [...LinkList];
    return arr.map( (item) => {
      return {name: item.name, link: '/articles/'+ item.link};
    });
  }

  const links = numsLinks();

  return (
  <div className={ce.rootWrapper}>
    <Menu isDesktop={isDesktop}/>
    <div className={ce.PageHeader2}></div>

    <div className={homeP.personInfo_wrapper}>
      <div className={homeP.personInfo}>
        <div className={ce.div_textQuote}>Статьи</div>
      </div>

      {/*<div className={homeP.img_portrait}>
        <Image src={img_article1} alt="portrait_home"/> 
      </div>*/}
    </div>

    <div style={{height:'150px'}}></div>      
    
    <div className={ce.divPageW90}>
      <ul style={{padding:'0', textDecoration:'none'}}>
        { links.map( (item, index) => {
          return <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li> 
        }) }
      </ul>
    </div>

    <Footer isDesktop={isDesktop}/>  
  </div>)
}

export default Articles;
