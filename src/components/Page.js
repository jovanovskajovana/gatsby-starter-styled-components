import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import { PageLayout } from '../styles/PageLayout'
import { Typography } from '../styles/Typography'
import themes from '../constants/themes'
import { useTheme } from '../hooks/useTheme'

import Header from './Header'

const Page = ({ children }) => {
  const [mode, toggleMode] = useTheme()

  const themeMode = mode === 'light' ? themes.light : themes.dark

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Typography />
      <Header mode={mode} toggleMode={toggleMode} />
      <PageLayout>{children}</PageLayout>
    </ThemeProvider>
  )
}

export default Page
