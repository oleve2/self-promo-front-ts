import { FC } from "react";
import Image from "next/image";

// styles
import stt from './ScrollToTop.module.scss';

// images
import goup from '../../public/common/goup.png'

const ScrollToTop:FC = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour in place of 'smooth' */
  });
  };

  return (<>
  <div className={stt.arrToTop} onClick={scrollToTop}>
    <Image src={goup} alt="goup"></Image>
  </div>
  </>)
}

export default ScrollToTop;
