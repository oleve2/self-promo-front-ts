
import '../styles/globals.scss'
import type { AppProps } from 'next/app';

import { useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';


function MyApp({ Component, pageProps }: AppProps) {
  const windim = useWindowDimensions();
  const [isDesktop, setisDesktop] = useState(false);
  
  const mobBP: Number = +process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT!;
  
  useEffect( () => {
    if (windim !== undefined) {
      if (windim.width! >= mobBP) {
        setisDesktop(true);
      } else {
        setisDesktop(false)
      }
    }
  },[windim, mobBP])

  return (<>
    <Component {...pageProps} 
      isDesktop={isDesktop}
    />
  </>
  )
}

export default MyApp
