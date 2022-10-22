import { FC } from "react";
import Link from "next/link";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';

const Articles:FC = () => {
  const numsLinks = () => {
    let arr = [1,2,3,4,5,6];
    return arr.map( (item) => {
      return "/articles/" + item;
    });
  }

  const links = numsLinks();

  return (
  <div className={ce.rootWrapper}>
    <Menu />
    
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

    <Footer />  
  </div>)
}

export default Articles;
