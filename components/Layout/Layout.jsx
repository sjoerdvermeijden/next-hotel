import React from 'react'

import { GlobalStyles } from '../Styles/GlobalStyles'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout