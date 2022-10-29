import { ArticleFull, PassageType } from "../models/ArticleModels";

/* Ключевые слова: фобия, невротический страх, социальная фобия, специфическая фобия, агорафобия. */

const ArticlePhobia: ArticleFull = {
  linkname: 'phobia',
  headerText: 'Фобия',
  keywords: 'фобия, невротический страх, социальная фобия, специфическая фобия, агорафобия',
  blockList: [
    {type: PassageType.main_title, text: `ФОБИЯ`},
    {type: PassageType.text_bold, text: `На данный момент описано более 500 видов фобий. По данным ВОЗ около 7% населения страдает от фобии. Женщины страдают в 2 раза чаще мужчин.`},

    {type: PassageType.text, text: `Ключевые слова: фобия, невротический страх, социальная фобия, специфическая фобия, агорафобия.`},
    {type: PassageType.text, text: `Страх- это естественная реакция организма, которая защищает перед реальной опасностью. Есть реальные конструктивные страхи, которые нормально испытывать в соответствующей ситуации (например, нормально проверить выключили ли вы утюг).`},
    {type: PassageType.text, text: `Есть невротические страхи, которые могут образовывать у любого человека в ожидании неприятностей (например, предстоит первое выступление с докладом и страшно опозориться).`},
    {type: PassageType.text, text: `Есть фобии- это иррациональный неконтролируемый страх в определенных ситуациях или в присутствии/ожидании известного объекта.`},
    {type: PassageType.text, text: `Фобии можно разделить на 3 категории:`},

    {type: PassageType.text, text: `1) специфические фобии (страх полета в самолете, страх насекомых, высоты..)`},
    {type: PassageType.text, text: `2) социальные (страх выступлений, потерять близкого, страх познакомиться…)`},
    {type: PassageType.text, text: `3) агорафобия (боязнь открытого пространства)`},
    {type: PassageType.text, text: `Человек не может контролировать свою фобию и выбирает “удачную” стратегию- избегать ситуаций, которая может вызвать фобию (например, фобия утонуть - не плавать).`},
    {type: PassageType.text, text: `Однако фобия имеет неприятную способность распространяться на похожие по ощущениям ситуации: например, фобия утонуть сначала переходит в ограничения, неспособность пользоваться душем, затем лифтом, затем посещать туалет с открытой дверью.`},

    {type: PassageType.text_bold, text: `Причины возникновения фобий:`},
    {type: PassageType.text, text: `(это обобщенная картина, на основе практического опыта, однако в каждом индивидуальном случае есть своя причина возникновения)`},
    {type: PassageType.text, text: `- конкретная травматичная, шокировавшая  ситуация в прошлом, которая приводит к такой же фобии (Старший брат решил разбудить подкинув паука на лицо  и через некоторое время, если ничего с этим не делать, то - фобия насекомых)`},
    {type: PassageType.text, text: `- социальные фобии обычно формируются на основе воспитания  и жизненного детского и подросткового возраста`},
    {type: PassageType.text, text: `- невротический страх и тревога на основе подсознательных опасений смещается и находит форму фобии (Например, буллинг в школе перевоплощается в фобию крови или смерть родителей может перейти в фобию находиться в закрытых пространствах).`},
    
    {type: PassageType.text_bold, text: `Что делать?`},
    {type: PassageType.text, text: `Специфические фобии решаются с помощью ЕМДР и КПТ методов. С помощью ЕМДР- терапии фобии и невротические страхи перерабатываются по определенной схеме достаточно быстро и  успешно. После установления причины фобии, разбора приведшей к фобии ситуации и переработки ее постепенное сближение с пугающим объектом.`},
    {type: PassageType.text, text: `Например, боязнь ездить на лифте. После переработки изначальной ситуации и катастрофических сценариев, клиенту предлагается начать с того, чтобы вызвать лифт и постоять у дверей, фокусируясь на внутреннем состоянии. Затем, например, войти и постоять в лифте и так далее до момента спокойного перемещения на лифте не только в своем подъезде, но и в других домах также.`},
    {type: PassageType.text, text: `За социальными фобиями часто стоит страх отвержения, основанный на предыдущем опыте. И дилемма в том, что нет гарантии, что вас 100%-но будут принимать, поддерживать вас, позитивно и поддерживающе к вам относиться. В работе с психологом есть много возможностей с этим обходиться. И есть общая рекомендация - фокусироваться на тех людях, которые вас принимают уже сейчас, замечать ценность своего окружения, близких, друзей.`},
    {type: PassageType.text, text: `Агорафобия, которая часто сопровождается паническими атаками, часто имеет под собой не явную причину. В причине, до которой еще нужно докопаться, кроется решение. `},
    
    {type: PassageType.text_bold, text: `Рекомендации по самоподдержке при фобиях:`},
    {type: PassageType.text, text: `1) Осознавать/понимать причину страха.`},
    {type: PassageType.text, text: `2) Занятие спортом и телесными практиками.`},
    {type: PassageType.text, text: `3) Непосредственно в момент сильной тревоги, панической атаки фокусироваться на теле, на физических ощущениях, на том, что вас окружает вокруг. Расслаблять свое тело.`},
    {type: PassageType.text, text: `4) обращать внимание на факты, когда ваша фобия не подтвердилась. Хвалить себя за моменты победы над своим страхом.`},
    
    {type: PassageType.text, text: `Работа с психологом помогает в работе со страхами и фобиями. В рамках терапии можно встретиться и отделить иррациональный компонент от различных составляющих фобии: эмоциональную, телесную, когнитивную, поведенческую.`},
    {type: PassageType.text, text: `Избавиться от фобии возможно.`},
  ]
}

export default ArticlePhobia;
