# Gatsby starter with Styled Components

Here is a ready-to-use [Gatsby](https://www.gatsbyjs.com/) starter with [Styled Components](https://styled-components.com/), ESLint, SEO optimization and more.

<img src='./src/assets/images/logo-gatsby-styled-components.png' width='340'>

## 🚀 Setup

With Gatsby, we can write React-based components that will be turned into static HTML, CSS, and JS at build time. Splitting the code by components makes it faster for users to load only what they need, and with route-based prefetching, to get data based on the page they are currently on. All page content is server-side rendered, leading to extremely fast loading times and further optimization for search engine crawlers.

### Basic setup

```
npm install -g gatsby-cli
```

> Make sure you have a recent version of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) set on your machine, then install the [Gatsby CLI](https://www.gatsbyjs.com/tutorial/part-zero/#using-the-gatsby-cli).

```
gatsby new your-project-name https://github.com/jovanovskajovana/gatsby-starter-styled-components.git
```

> Create new poject from this starter. Remember to name it as you wish, navigate to the directory, run `npm run dev` and start the development mode available at http://localhost:8000.

<br/>

## 🔎 Dive deeper

- [Styled Components](#styled-components)
- [Layout](#layout)
- [Typography](#typography)
- [Theming](#theming)
- [Link](#link)
- [Image](#image)
- [Browser and SSR](#gatsby-browser-and-gatsby-ssr)
- [SEO](#seo)
- [Deploy](#deploy)

### Styled Components

Think of all the reusable modules on the site and create a styled component for each. The rule of thumb is that any logical part, such as header, button, input, or pagination, turns into its own layout and nests all of its children selectors.

```
import styled from 'styled-components'

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 10rem;

  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.textPrimary};
  }
`

export default HeaderLayout
```

> First you need to define styled properties for the element. It can be `div`, `p`, any other element, or extension of an [already created styled component](./src/styles/ButtonLayout.js).

```
import React from 'react'
import { Link } from 'gatsby'

import HeaderLayout from '../styles/HeaderLayout'

const Header = () => (
  <HeaderLayout>
    <Link to="/contact">let's connect</Link>
    <Link to="/">go back home</Link>
  </HeaderLayout>
)

export default Header
```

> Then simply import it to wrap any sub-elements or content that needs to be stylized.

<br/>

You can also create your own global style normalizer with `createGlobalStyle`. Place the GlobalStyles on top of the main [Layout](#layout) component to ensure that it is shared over all pages.

```
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }

  html,
  body {
    font-size: 16px;
    line-height: 1.5;
    font-family: Ubuntu, sans-serif;
  }

  ...
`

export default GlobalStyles
```

### Layout

Most likely, you will like to have a general site structure with header, footer, centered container, some global styles, and so on. Create a generic Page component with a logically structured tree that will wrap all the `children` elements passed from [different pages](./src/pages/wrappedLayout.js).

```
import React from 'react'

import GlobalStyles from '../styles/GlobalStyles'
import { PageLayout } from '../styles/PageLayout'
import { Typography } from '../styles/Typography'

import Header from './Header'

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header mode={mode} toggleMode={toggleMode} />
      <PageLayout>{children}</PageLayout>
    </>
  )
}

export default Page
```

### Typography

Lorem ipsum

<!-- After setting the layout we should make sure that all the common components and styles do not unmount on page change.  -->

### Theming

Notice how we added the `ThemeProvider` component to the top of the layout. That will give an access to the theme variables to all the styled-components in the render tree. In addition, it makes it extremely easy for you to create a dark / light theme mode or allow the user to select any of the color palette options you will offer in the [theme](./src/constants/theme.js) object.

```
import React, { useEffect } from 'react'
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
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Typography />
      <Header mode={mode} toggleMode={toggleMode} />
      <PageLayout>{children}</PageLayout>
    </ThemeProvider>
  )
}

export default Page
```

> With the `useTheme()` [custom hook](./src/hooks/useTheme.js) you can captur the user's preferred mode and save it in local storage.

### Link

Lorem ipsum

### Image

1. Static import with Webpack
2. Graphql

### Gatsby Browser and Gatsby SSR

As your site grows bigger, you don't want to go trough every single page and wrap the [Layout](#layout) component around it. Instead, you can use the Gatsby [wrapPageElement](https://www.gatsbyjs.com/docs/ssr-apis/#wrapPageElement) plugin, which will be defined in the [gatsby-ssr.js](https://www.gatsbyjs.com/docs/api-files-gatsby-ssr) and [gatsby-browser.js](https://www.gatsbyjs.com/docs/api-files-gatsby-browser/) files at the root of your project to automatically wrap your layout.

```
import React from 'react'

import Page from './src/components/Page'

export function wrapPageElement({ element, props }) {
  return <Page {...props}>{element}</Page>
}
```

### SEO

Lorem ipsum

### Deploy

Lorem ipsum
