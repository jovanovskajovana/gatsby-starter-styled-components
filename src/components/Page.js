import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import GlobalStyles from '../styles/GlobalStyles'
import { PageLayout } from '../styles/PageLayout'
import { Typography } from '../styles/Typography'
import theme from '../constants/theme'
import { useTheme } from '../hooks/useTheme'

import Header from './Header'

const Page = ({ children }) => {
  const [mode, toggleMode] = useTheme()

  const themeMode = mode === 'light' ? theme.light : theme.dark

  return (
    <ThemeProvider theme={themeMode}>
      {/* <Typography /> */}
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <Header mode={mode} toggleMode={toggleMode} />
      <PageLayout>{children}</PageLayout>
    </ThemeProvider>
  )
}

export default Page
