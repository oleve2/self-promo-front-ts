import { StaticImageData } from "next/image"

export enum PassageType {
  main_title = 'main_title',
  text = 'text',
  text_bold = 'text_bold', 
  header = 'text_header',
  image = 'image',
}

export interface ArticleFull {
  linkname: string,
  linkFull: string,
  headerText: string,
  summary?: string[],
  keywords: string, 
  mainImage: StaticImageData | string,
  blockList: ArticleBlock[]
} 

export interface ArticleBlock {
  type: PassageType,
  text: string,
  image?: StaticImageData,
}

export interface LinkListType {
  link: string,
  name: string,
  img: StaticImageData,
}


export interface ArticleHomepage {
  id: number,
  img: StaticImageData,
  title: string,
  text: string[],
  articlePageLink: string,
}
