import type { AppProps /*, AppContext */ } from 'next/app'
import RestaurantContext from '../context'





export default function MyApp({ Component, pageProps }:AppProps) {
    return(
    <RestaurantContext >
   
    <Component {...pageProps} />

    </RestaurantContext> 
    )
  }