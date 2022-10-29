import { Html, Head, Main, NextScript } from 'next/document'

import { useEffect } from 'react';

export default function Document() {
  const ym = +process.env.NEXT_PUBLIC_YMID;

  useEffect( () => {
    console.log('ym=', ym);
  }, [ym])

  return (
    <Html>
      <Head></Head>
      <body>
        <Main></Main>
        <NextScript />

        <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           
              ym(${ym}, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true
              });
              `,
            }}
          />
        <noscript><div><img src={`https://mc.yandex.ru/watch/${ym}`} style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
      </body>
    </Html>
  )
}
