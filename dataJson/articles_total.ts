// types
import { ArticleFull, LinkListType } from "../models/ArticleModels";

// articles
import ArticleAboutMethodEMDR from "./articles_about_method_emdr";
import ArticleProcrastination from './article_procrastination';
import ArticleDeprecation from "./article_depreciation";
import ArticlePhobia from "./article_phobia";

const AF:  ArticleFull[]  = [
  ArticleAboutMethodEMDR, 
  ArticleProcrastination, 
  ArticleDeprecation, 
  ArticlePhobia
];

const makeLinkList = () => {
  let arr: LinkListType[] = [];
  for (let i=0; i < AF.length; i++) {
    arr.push({link: AF[i].linkname, name: AF[i].headerText});
  }
  return arr;
}

export const LinkList = makeLinkList();

export default AF;
