import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import { PageLayout } from '../styles/PageLayout'
import theme from '../constants/theme'
import Header from './Header'

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <PageLayout>{children}</PageLayout>
  </ThemeProvider>
)

export default Page
