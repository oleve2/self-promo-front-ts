import { ArticleFull, PassageType } from "../models/ArticleModels";

// images
import article_deprecation_main from '../public/pageArticles/article_deprecation_main.webp';
import article_deprecation_pic1 from '../public/pageArticles/article_deprecation_pic1.webp';
import article_deprecation_pic2 from '../public/pageArticles/article_deprecation_pic2.webp';



/* Ключевые слова: обесценивание, самообесценивание, стыд, ценить себя. */

const ArticleDeprecation: ArticleFull = {
  linkname: 'deprecation',
  linkFull: '/articles/deprecation',
  headerText: 'Обесценивание',
  summary: [
    `Обесценивание — это форма психологической защиты, когда мы снижаем ценность происходящего, чтобы защитить свою самооценку, почувствовать себя в безопасности, избежать неприятных чувств (зависти, страха, боли).`
  ],
  mainImage: article_deprecation_main,
  keywords: 'обесценивание, самообесценивание, стыд, ценить себя',
  blockList: [
    {type: PassageType.main_title, text: `ОБЕСЦЕНИВАНИЕ`},
    {type: PassageType.text_bold, text: `“Как много знающих как жить. Как мало счастливо живущих”`},

    {type: PassageType.text, text: `Обесценивание - это форма психологической защиты, когда мы снижаем ценность происходящего, чтобы защитить свою самооценку, почувствовать себя в безопасности, избежать неприятных чувств (зависти, страха, боли).`},
    {type: PassageType.image, text:'', image:article_deprecation_pic1},
    {type: PassageType.text_bold, text: `Как мы научаемся обесценивать:`},
    {type: PassageType.text, text: `Чаще всего мы получаем подобный опыт в детстве. `},
    {type: PassageType.text, text: `Родители могут игнорировать наши достижения, сравнивая с более успешными детьми или демонстрируя на практике, что “взрослые дела” важные, а детские успехи, достижения, чувства, истории, стремления - не значительны.`},
    {type: PassageType.text, text: `Например, родители говорят 7-летнему сыну, что им необходимо отойти по делам, а его взять не могут, потому что он болеет. Прекрасно аргументируют этот поступок и важность их ухода. Могут пообещать петушок, как в сказке Гуси-Лебеди. За кадром остаются чувства детской обиды, одиночества, боли от больного горла и того, что взрослые дела важнее его.`},

    {type: PassageType.text_bold, text: `Так мы научаемся обесценивать сами себя, делая это также, как и наши родители. `},
    {type: PassageType.text, text: `Другой вариант, который также оказывает влияние на наше самоотношение и научает нас смотреть на себя через призму неважности - это когда родители выражают свое недовольство нашим поведением, переходя на личные качества, тем самым, унижая наше достоинство. `},
    {type: PassageType.text, text: `Например, папа приходит домой и сообщает 9-летней дочери, что какая она непутевая, не догадалась ужин приготовить, а ведь он с работы, уставший. Звучит достаточно логично, но если это повторяется (не догадалась посуду помыть, не хочет разделять радости дачных поездок - а должна), то такой ребенок делает выводы, что его желания и чувства не важны, а потребности других - очень важные. А еще о них нужно уметь догадываться.`},
    {type: PassageType.text, text: `В детском возрасте отсутствие поддержки, обесценивание и последующее за этим отвержение (если не такая, то словно выдавливается из семьи), переживаются внутри, как катастрофа, смерть и бесконечная тупая боль. Страх оказаться неугодным, не подходящим и ненужным  связан с реальной физической опасностью  и запускает механизм выживания. Этот родительский способ контроля поведения детей оказывается очень жесткими рамками, в которых ребенку надо научиться размещаться, а затем сложно оттуда выбраться и расправлять свои крылья, свои желания и потребности.`},
    {type: PassageType.text, text: `Наши значимые взрослые являются для нас зеркалом, в котором мы видим и узнаем о том, какие мы, что в нас есть хорошего/плохого и как с нами надо обращаться. И по мере взросления мы научаемся этому отношению и внешний родительский голос становится внутренним. То есть мы живем отдельно, а мамин/бабулин/папин голос уже становится нашим внутренним голосом критика, который нас обесценивает.`},

    {type: PassageType.text, text: `Внутренний мир недооцененных людей  выстраивается по принципу самокритики. `},
    {type: PassageType.image, text:'', image:article_deprecation_pic2},
    {type: PassageType.text_bold, text: `Признаки самообесценивания`},
    {type: PassageType.text_bold, text: `Когда внутренний голос верит, что:`},
    {type: PassageType.text, text: `- я не ценный`},
    {type: PassageType.text, text: `- я не важный`},
    
    {type: PassageType.text, text: `- я никчемный`},
    {type: PassageType.text, text: `- это никому не интересно`},
    {type: PassageType.text, text: `- я знаю мало, недостаточно`},
    {type: PassageType.text, text: `- я все провалю, ничего не получится`},
    {type: PassageType.text, text: `- я не заслуживаю больших денег/высокой должности`},
    
    {type: PassageType.text, text: `Человек “недокормлен” в детстве принятием, похвалой, родительской гордостью. Поэтому ему бывает тяжело услышать и поверить в свою хорошесть и он:`},
    {type: PassageType.text, text: `- либо не слышит хорошего`},
    {type: PassageType.text, text: `- слышит и тут же хорошее обесценивает`},
    {type: PassageType.text, text: `- выискивает и находит критические или не восторженные замечания и концентрируется на них (среди 10 доброжелательных обратных связей будет концентрироваться на одном не восторженном)`},
    {type: PassageType.text, text: `- не верит комплиментам, похвале - считает, что говорят из вежливости`},

    {type: PassageType.text_bold, text: `Взрослая реальность человека с самообесцениванием`},
    {type: PassageType.text, text: `В детстве мы соглашаемся с посланиями значимых близких и научаемся сами себя отвергать и обесценивать, тем самым соглашаясь с предложенным вариантом правил отношений, чтобы остаться в семье. Мы проживаем его, как невыносимое чувство токсичного стыда (если не соответствуем).`},
    {type: PassageType.text, text: `Откуда берется этот стыд?`},
    {type: PassageType.text, text: `Наши родители могли испытывать разные негативные чувства рядом с нами.`},
    {type: PassageType.text, text: `Например, мама могла чувствовать вину на детской площадке, когда другие трехлетки уже во всю разговаривали, а ее ребенок еще не заговорил. Она могла внутри винить себя в этом, аргументируя, что курила во время беременности или не знала о своей беременности и участвовала в вечеринках с алкоголем.`},

    {type: PassageType.text, text: `Или  папа, может испытывать стыд, увидев, что сын плачет при расставании и не хочет идти в сад. Как же так, он же мальчик.`},
    {type: PassageType.text, text: `Родителям может быть неловко за детей, когда они рассказывают родительские “секреты” или чавкают за столом при гостях.`},
    {type: PassageType.text, text: `Также родители могут испытывать отвращение или зависть к своим детям. И живя в этой атмосфере, ребенок перенимает это на себя и живет с виной за то, что не заговорил в 3 года, стыдом за слезы, мнением о себе, как о некрасивой.   И веры объективной взрослой реальности нет, потому что мы верим своим родителям.`},
    {type: PassageType.text, text: `Во взрослом возрасте для нас становятся триггерными (пусковыми, которые запускаю постстрессовые переживания) и невыносимыми те чувства, которые бессознательно испытывали наши родители по отношению к нам. Мы научились от них чувствовать себя позорными, виноватыми, пугающими. Это была их реакция, их чувства, которые мы приняли на веру и сделали своими.`},
    {type: PassageType.text_bold, text: `Как перестать себя обесценивать? начать относится к себе иначе, ценить себя?`},    

    {type: PassageType.text_bold, text: `1) Пересмотреть ситуации, в которых вы чувствуете себя обесцененным взрослым объективным взглядом.`},
    {type: PassageType.text, text: `Когда мы идем в непереносимые чувства, то сталкиваемся со своим детским опытом. Там было больно, тяжело, плохо. `},
    {type: PassageType.text, text: `Сверяйтесь с реальностью - правда ли только вы единственный имели проблемы с речью в этом возрасте? Правда ли это социально неприемлемо не говорить и плохо говорящий ребенок должен быть подвержен остракизму, застыжен и не делать попыток научиться этого?`},
    {type: PassageType.text, text: `Психотерапия помогает перепроживать детские истории, отгоревывать и позволяет поселить еще один внутренний голос, который “за нас”.`},
    {type: PassageType.text_bold, text: `2) Сменить фокус сравнения “как у других” на “как это для меня”`},    
    
    {type: PassageType.text, text: `У обесценивающих себя людей смещен фокус внутреннего контроля на внешний, это значит, что таким людям сложно опираться на свои чувства, ощущения, желания. Их внутренний мир незначителен, а вот у других (фокусная группа или значимые люди) так как надо и надо стремится туда.`},
    {type: PassageType.text, text: `Человек попадает в ловушку “угадать как надо и удовлетворить другого” - как в детстве значимого взрослого. И стратегии могут быть на развитие способности вчувствоваться в  другого и понимать его, либо развитие исполнительности.`},
    {type: PassageType.text, text: `Удовлетворения так и не наступает, потому что нет ориентации на себя, нет собственной устойчивости и связи со своими желаниями, потребностями.`},
    {type: PassageType.text, text: `Другая ловушка - это жизнь “в маске”. Когда мы ориентируемся на то, что, как нам кажется, будет хорошо для нас. Когда отсутствует внутренняя связь со своими потребностями, желаниями, мечтами, то мы начинаем жить по шаблону “успешный успех”. Что было бы хорошо? Естественно, нужно стремиться к карьере, большим деньгам, встретить крутого парня, купить модную машину и прочее. И когда все атрибуты успешности оказываются, как галочки, проставлены, то появляется апатия, ощущение не ценности жизни, бессмысленности, пропадает яркость жизни.`},
    {type: PassageType.text_bold, text: `3) Признание как внутренняя потребность.`},   
    
    {type: PassageType.text, text: `Потребность в признании - это одна из базовых потребностей, основанная на желании быть важным, значимым, заметным.`},
    {type: PassageType.text, text: `Недооцененный ребенок чувствует дефицит и недостаточность в этой зоне. Ощущение взрослого человека, что хочу признания, похвалы, словно образ черной дыры, которую невозможно заткнуть. Такой человек словно постоянно ждет от всех - скажите, что я хороший, похвалите меня. Но сколько бы прекрасных, добрых слов не было сказано - этого мало, работает либо 1-2 вечера, а затем это ощущение утрачивается.`},
    {type: PassageType.text, text: `Чаще всего воспитанием передается представление о том, что привлекать к себе внимание, быть ярким, громким, неудобным - это нехорошо.`},
    {type: PassageType.text, text: `Если желание признания и одобрения не может удовлетворятся естественным способом, то оно реализуется невротически образом:`},
    {type: PassageType.text, text: `- трудоголизм`},
    
    {type: PassageType.text, text: `- быть хорошим для всех`},
    {type: PassageType.text, text: `- позиция несчастного, страдающего человека, зависимое поведение`},
    {type: PassageType.text, text: `- самоутверждение за счет других`},
    {type: PassageType.text, text: `- болезни`},
    {type: PassageType.text_bold, text: `Как можно чувствовать признание и свою хорошесть здоровым образом?`},    
    
    {type: PassageType.text, text: `- Одобрять себя самому`},
    {type: PassageType.text, text: `- Просить хвалить себя значимых людей, там где это возможно`},
    {type: PassageType.text, text: `- признаться себе, что вы в этом нуждаетесь`},
    {type: PassageType.text, text: `- поискать области, где вы могли бы получать это признание естественным путем`},
    {type: PassageType.text, text: `- реализовываться в важной для вас дейтельности`},   
    
    {type: PassageType.text, text: `Также при длительном общении с психотерапевтом ощущение внутренней значимости становится устойчивым внутренним ощущением.`},
    {type: PassageType.text_bold, text: `Ощущению самоценности помогают ответы на вопросы: `},
    {type: PassageType.text, text: `- В чем я на самом деле хорош?`},
    {type: PassageType.text, text: `- Что у меня получается хорошо?`},
    {type: PassageType.text, text: `- Что мне интересно?`},      

    {type: PassageType.text, text: `- От чего я получаю удовольствие?`},
    {type: PassageType.text, text: `- Что для меня важно?`},
    {type: PassageType.text, text: `Ценить себя - это знать свои ценности, опираться на свои принципы, знать чего хочу, самореализовываться, проживая свой уникальный Путь.`},
  ]
}

export default ArticleDeprecation;
