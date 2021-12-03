import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from '../Components/Footer/footer'
import GlobalStyle from '../Components/GlobalStyles/global'
import { Header } from '../Components/Header/header'
import { Main } from '../Components/Main/main'

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>Blog-Portfolio</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
