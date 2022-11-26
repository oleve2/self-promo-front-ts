
import article_procrastination from '../public/homepage/article_procrastination.png';
import article_about_emdr from '../public/homepage/article_about_emdr.png';
import article_lack_of_self_esteem from '../public/homepage/article_lack_of_self_esteem.png';
import article_deprecation from '../public/homepage/article_deprecation.png';

import { ArticleHomepage } from '../models/ArticleModels';


export const data_articles: ArticleHomepage[] = [
  {
    id: 0,
    img: article_procrastination,
    title: 'Прокрастинация',
    articlePageLink: '/articles/procrastination',
    text: [
      `Почему я не занимаюсь спортом? Почему не ищу лучшую работу? Почему не читаю книги?`,
      `Почему купила очередной обучающий курс и не прохожу его?`,
      `Наше нежелание причинить себе добро вызывает наше сопротивление и нежелание. Мы словно враги своим желаниям и стремлениям.`,
    ] 
  },
  {
    id: 1,
    img: article_about_emdr,
    title: 'О методе ЕМДР',
    articlePageLink: '/articles/about_method_emdr',
    text: [
      `«Хотя травма и является событием прошлого, эмоциональный мозг продолжает генерировать ощущения, из-за которых человек чувствует себя напуганным и беспомощным».`,
    ],
  },
  {
    id: 2,
    img: article_lack_of_self_esteem,
    title: 'Неуверенность в себе',
    articlePageLink: '/articles/lack_of_self_esteem',
    text: [
      `Это состояние сомнения в себе, своих силах, парализующий страх, сопротивление начинать новое, пробовать, страх проявляться и быть видимым.`,
      `Состояние тревоги и беспокойства перед чем-то новым — это нормальное состояние.`,
    ]
  },
  {
    id: 3,
    img: article_deprecation,
    title: 'Обесценивание',
    articlePageLink: '/articles/deprecation',
    text: [
      `Обесценивание — это форма психологической защиты, когда мы снижаем ценность происходящего, чтобы защитить свою самооценку, почувствовать себя в безопасности, избежать неприятных чувств (зависти, страха, боли).`,
    ]
  },  
];

