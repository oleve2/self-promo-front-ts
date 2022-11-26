import { FC } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

// components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

// styles
import ce from '../../styles/CommonElements.module.scss';
import homeP from '../../styles/PageHome.module.scss';
import artP from '../../styles/PageArticleNames.module.scss';

// models
import { PageProps } from "../../models/PageModel";
import { LinkListType } from "../../models/ArticleModels";

// data
//import { LinkList } from "../../dataJson/articles_total";
import { AF } from '../../dataJson/articles_total';

//
const Articles:FC<PageProps> = (props) => {
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
      <ul className={artP.articlesTotal__ul}>
        { AF.map( (item, index) => {
          return <li key={index} className={artP.articlesTotal__li}>
            <div className={artP.articlesTotal__imageWrp} >
              <Image src={item.mainImage!} alt="img"></Image>
            </div>
            
            <div>
              {item.summary}
            </div>

            <Link href={item.linkFull}>
              <span className={ce.linkWithArrow}>{item.headerText}</span>
            </Link>
            
          </li> 
        }) }
      </ul>
    </div>

    <Footer 
      isDesktop={props.isDesktop}
      backgroundColor="#E7F4FF"
    />  
  </div>)
}

export default Articles;
