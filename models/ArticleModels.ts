import { StaticImageData } from "next/image"

export enum PassageType {
  main_title = 'main_title',
  text = 'text',
  text_bold = 'text_bold', 
  header = 'text_header',
}

export interface ArticleFull {
  linkname: string,
  headerText: string,
  keywords: string, //| String[]
  blockList: ArticleBlock[]
} 

export interface ArticleBlock {
  type: PassageType,
  text: string,
}

export interface LinkListType {
  link: string,
  name: string,
}


export interface ArticleHomepage {
  id: number,
  img: StaticImageData,
  title: string,
  text: string[],
  articlePageLink: string,
}
