import { StaticImageData } from "next/image";
import { PassageType } from "./ArticleModels";

export interface rulesBlock {
  text: string,
  type: PassageType,
}

export interface rulesParagraph {
  paragraphdata: rulesBlock[],
}

export interface RulesType {
  id: number,
  img: StaticImageData,
  title: string,
  textArr: rulesParagraph[],
}
