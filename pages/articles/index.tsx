import { FC } from "react";
import Link from "next/link";

import { useState, useEffect } from "react";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

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
    let arr = [1,2,3,4,5,6];
    return arr.map( (item) => {
      return "/articles/" + item;
    });
  }

  const links = numsLinks();

  return (
  <div className={ce.rootWrapper}>
    <Menu isDesktop={isDesktop}/>
    
    <div style={{height:'100vh'}}>
      <div>page articles (under construction)</div>
      <ul>
        { links.map( (item) => {
          return <li key={item}>
            <Link href={item}>{item}</Link>
          </li> 
        }) }
      </ul>
    </div>

    <Footer isDesktop={isDesktop}/>  
  </div>)
}

export default Articles;
