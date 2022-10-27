// types
import { ArticleFull, LinkListType } from "../models/ArticleModels";

import ArticleAboutMethodEMDR from "./articles_about_method_emdr";
import ArticleProcrastination from './article_procrastination';

const AF:  ArticleFull[]  = [ArticleAboutMethodEMDR, ArticleProcrastination];

const makeLinkList = () => {
  let arr: LinkListType[] = [];
  for (let i=0; i < AF.length; i++) {
    arr.push({link: AF[i].linkname, name: AF[i].headerText});
  }
  return arr;
}

export const LinkList = makeLinkList();

export default AF;
