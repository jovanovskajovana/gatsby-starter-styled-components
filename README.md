# Gatsby starter with Styled Components

Here is a ready-to-use Gatsby starter with Styled Components, ESLint, SEO optimization and more.

<img src='./src/assets/images/logo-gatsby-styled-components.png' width='340'>

## 🚀 Setup

With [Gatsby](https://www.gatsbyjs.com/), we can write React-based components that will be turned into static HTML, CSS, and JS at build time. Splitting the code by components makes it faster for users to load only what they need, and with route-based prefetching, to get data based on the page they are currently on. All page content is server-side rendered, leading to extremely fast loading times and further optimization for search engine crawlers.

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

## 🕵️‍♀️ Dive deeper

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

Think of all the reusable modules on the site and create a [styled component](https://styled-components.com/) for each. The rule of thumb is that any logical part, such as header, button, input, or pagination, turns into its own layout and nests all of the children selectors.

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
    font-family: "Ubuntu", sans-serif;
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

Depending on the source of the fonts, you can choose a [different approach](https://www.gatsbyjs.com/docs/working-with-fonts-and-typography/) to include them in the site. When working with custom fonts, you can host them locally in the `assets/fonts` directory, and Gatsby will make sure they are moved to a static folder, included in the page header, and served before the site is rendered.

```
import styled, { createGlobalStyle } from 'styled-components'

import fontRegular from '../assets/fonts/Ubuntu-Regular.ttf'
import fontItalic from '../assets/fonts/Ubuntu-Italic.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontRegular});
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontItalic});
    font-style: italic;
    font-weight: 400;
  }

  ...
`
const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`

export { Typography, Title }
```

> Simply by importing font files into the Typography(./src/styles/Typography.js), it creates a URL with a unique identifier that you can use when declaring the`@font-face`. Just remember to set the right font-family in your [GlobalStyles](./src/styles/GlobalStyles.js) and also set the Typography component on top of the main [Layout](#layout).

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
