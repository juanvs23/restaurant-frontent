import Head from 'next/head'
import { PropsChildren } from '../models/React'
import GlobalStyle from '../styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import Header from './header/header'
import { Footer } from './footer/footer'
import Favicon from '../public/favicon.png'

const Theme={
  color:{
    primary:'black'
  }
}

export default function Layout(props:PropsChildren ) {
  
  return(
      <>
       <GlobalStyle/>
< ThemeProvider theme={Theme}>

      <Head>
          <title>
                {props.title}
          </title>
          <link rel="icon" type="image/png" href={Favicon.src} sizes="96x96"/>
      </Head>
      <Header/>
      {props.children}
      <Footer />
</ThemeProvider>
      </>
  )  
}