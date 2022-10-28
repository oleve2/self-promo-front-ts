
export enum PassageType {
  main_title = 'main_title',
  text = 'text',
  text_bold = 'text_bold', 
  header = 'text_header',
}

export interface ArticleFull {
  linkname: String,
  headerText: String,
  keywords: string, //| String[]
  blockList: ArticleBlock[]
} 

export interface ArticleBlock {
  type: PassageType,
  text: String,
}

export interface LinkListType {
  link: String,
  name: String,
}


