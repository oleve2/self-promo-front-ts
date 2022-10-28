import { FC } from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

// components
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

// styles
import ce from '../../styles/CommonElements.module.scss';
import homeP from '../../styles/PageHome.module.scss';
import artN from '../../styles/PageArticleNames.module.scss';

// articles data
import AF from "../../dataJson/articles_total";

// types
import { ArticleBlock, ArticleFull, PassageType } from "../../models/ArticleModels"; 

// hooks
import useWindowDimensions from "../../hooks/useWindowDimensions";

// images (temporary)
//import img_article1 from '../../public/homepage/article1_big.png';


//interface ArticleProps {}

const Article:FC = () => {
  const router = useRouter();
  const articleName = router.query.articleName;
  const [artData, setartData] = useState<ArticleFull>({linkname:'', headerText:'', keywords:'', blockList:[]});

  const windim = useWindowDimensions();
  const [isDesktop, setisDesktop] = useState(false);
  const mobBP : number= +process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT!;

  // page content
  useEffect( () => {
    console.log(`articleName=${articleName}`);
    for (let i=0; i < AF.length; i++) {
      console.log(AF[i].linkname);
      if (articleName === AF[i].linkname) {
        setartData(AF[i]);
        console.log('found');
        break;
      }
    }
  }, [articleName])

  // window size
  useEffect( () => {
    if (windim !== undefined) {
      if (windim.width! >= mobBP ) { 
        setisDesktop(true);
      } else {
        setisDesktop(false)
      }
    }
  },[windim, mobBP])

  // construct page
  const constructTag = (item: ArticleBlock) => {
    if (item.type === PassageType.main_title) {
      return <h1 className={artN.articleName_h1}>{item.text}</h1>
    }
    if (item.type === PassageType.header) {
      return <h2 className={artN.articleName_text}>{item.text}</h2>
    }
    if (item.type === PassageType.text) {
      return <div className={artN.articleName_text}>{item.text}</div>
    }
    if (item.type === PassageType.text_bold) {
      return <div className={artN.articleName_text_bold}>{item.text}</div>
    }                
  }


  return (
  <div className={ce.rootWrapper}>
    <Head>
      <title>Айгуль Дейнекина | Статьи: {artData.headerText}</title>
      <meta 
        name="description"
        content={`Айгуль Дейнекина | Статьи: ${artData.headerText}`}
        key="desc"
        />   
      <meta name="keywords" content={artData.keywords}></meta>       
    </Head>    

    <Menu isDesktop={isDesktop}/>
    <div className={ce.PageHeader2}></div>

    <div className={homeP.personInfo_wrapper}>
      <div className={homeP.personInfo}>
        <div className={ce.div_textQuote}>{artData.headerText}</div>
      </div>

      {/*<div className={homeP.img_portrait}>
        <Image src={img_article1} alt="portrait_home"/> 
      </div>*/}
    </div>

    <div style={{height:'150px'}}></div>  

    <article className={ce.divPageW90}>
      { (artData.linkname === '') 
        ? <div className={ce.div_textQuote}>Интересующей Вас страницы не существует</div> 
        : <>
        <div>
          { artData.blockList.map( (item, index) => {
            return <div key={index}>{constructTag(item)}</div>
          }) }
        </div>
        </>
      }
    </article>
    
    <div style={{height:'150px'}}></div>  

    <Footer isDesktop={isDesktop}/> 
  </div>)
}

export default Article;
