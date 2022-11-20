import { FC } from "react";
import Link from "next/link";
import Head from "next/head";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';
import homeP from '../../styles/PageHome.module.scss';

import { PageProps } from "../../models/PageModel";

// data
import { LinkList } from "../../dataJson/articles_total";

// types
import { LinkListType } from "../../models/ArticleModels";

//
const Articles:FC<PageProps> = (props) => {
  const numsLinks = () => {
    let arr: LinkListType[] = [...LinkList];
    return arr.map( (item) => {
      return {name: item.name, link: '/articles/'+ item.link};
    });
  }

  const links = numsLinks();

  return (
  <div className={ce.rootWrapper}>
    <Head>
      <title>Психолог Айгуль Дейнекина - Статьи</title>
      <meta 
        name="description"
        content="Психолог Айгуль Дейнекина - Статьи"
        key="desc"
        />
    </Head>

    <Menu isDesktop={props.isDesktop}/>
    <div className={ce.PageHeader2}></div>

    <div className={homeP.personInfo_wrapper}>
      <div className={homeP.personInfo}>
        <div className={ce.div_textQuote}>Статьи</div>
      </div>
    </div>

    <div style={{height:'150px'}}></div>      
    
    <div className={ce.divPageW90}>
      <ul style={{padding:'0', listStyleType:'none'}}>
        { links.map( (item, index) => {
          return <li key={index} style={{marginBottom:'10px'}} className={ce.linkWithArrow}>
            <Link href={item.link}>
              <span className="CommonElements_linkWithArrow__text__94SUA">{item.name}</span>
            </Link>
          </li> 
        }) }
      </ul>
    </div>

    <Footer isDesktop={props.isDesktop}/>  
  </div>)
}

export default Articles;
