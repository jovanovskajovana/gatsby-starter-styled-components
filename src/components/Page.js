import React from 'react'
import { ThemeProvider } from 'styled-components'

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
    <>
      <GlobalStyles />
      <Typography />
      <ThemeProvider theme={themeMode}>
        <Header mode={mode} toggleMode={toggleMode} />
        <PageLayout>{children}</PageLayout>
      </ThemeProvider>
    </>
  )
}

export default Page
