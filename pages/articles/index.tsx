import { FC } from "react";
import Link from "next/link";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles




const Articles:FC = () => {
  
  const numsLinks = () => {
    let arr = [1,2,3,4,5,6];
    return arr.map( (item) => {
      return "/articles/" + item;
    });
  }

  const links = numsLinks();

  return (<>
  <Menu />
  
  <div>page Articles</div>

  <ul>
    { links.map( (item) => {
      return  <li>
        <Link href={item}>{item}</Link>
      </li> 
    }) }
  </ul>

  <Footer />
  </>)
}

export default Articles;
