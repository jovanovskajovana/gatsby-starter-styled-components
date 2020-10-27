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
- [Creating a Layout](#creating-a-layout)
- [Browser and SSR API files](#gatsby-browser-and-gatsby-ssr)
- [Working with Typography](#working-with-typography)
- [Theming](#theming)
- [Using Link](#using-link)
- [Using Image](#using-image)
- [SEO Optimization](#seo-optimization)
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

You can also create your own global style normalizer with `createGlobalStyle`. Place the GlobalStyles to the top of the main [Layout](#creating-a-layout) component to ensure that it is shared over all pages.

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

### Creating a Layout

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
      <Header />
      <PageLayout>{children}</PageLayout>
    </>
  )
}

export default Page
```

### Gatsby Browser and Gatsby SSR API files

As your site grows bigger, you don't want to go trough every single page and wrap the [Layout](#layout) component around it. Instead, you can use the Gatsby [wrapPageElement](https://www.gatsbyjs.com/docs/ssr-apis/#wrapPageElement) plugin, which will be defined in the [gatsby-ssr.js](https://www.gatsbyjs.com/docs/api-files-gatsby-ssr) and [gatsby-browser.js](https://www.gatsbyjs.com/docs/api-files-gatsby-browser/) files at the root of your project, to automatically wrap the main layout.

```
import React from 'react'

import Page from './src/components/Page'

export function wrapPageElement({ element, props }) {
  return <Page {...props}>{element}</Page>
}
```

### Working with Typography

Depending on the source of the fonts, you can choose a [different approach](https://www.gatsbyjs.com/docs/working-with-fonts-and-typography/) to include them in the site. When working with custom fonts, you can host them locally in the `assets/fonts/` directory, and Gatsby will make sure they are moved to the `static/` folder, included in the page header, and served before the site is rendered.

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
const Paragraph = styled.p`
  font-size: 0.8em;
  font-weight: 400;
`

export { Typography, Paragraph }
```

> By importing font files into the [Typography](./src/styles/Typography.js), it creates URL with a unique identifier that you can use to declare the `@font-face`. Just remember to set the right font-family in your [GlobalStyles](./src/styles/GlobalStyles.js) and also put the Typography component on top of the main [Layout](#layout).

### Theming

Notice how we added a `ThemeProvider` around the main page layout. That will give an access to the theme variables to all the styled-components in the render tree. In addition, it makes it pretty easy for you to create a dark / light theme mode or allow the user to select any of the color palette options you will offer in the [theme](./src/constants/theme.js) object.

```
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
```

> With the `useTheme()` [custom hook](./src/hooks/useTheme.js) you can capture user's preferred mode and save it to local storage.

### Using Link

All the basic styling is ready and you need to create a few pages. Pages can be [dynamically generated](https://www.gatsbyjs.com/docs/node-apis/#createPages) or they can be created in a file system routing. Go to the `pages/` directory and, in addition to `index.js` as the starting point of the site, create the other pages you need.

Now Gatsby will handle the [routing](https://www.gatsbyjs.com/docs/routing/) by creating a path for each page. Instead of using an anchor link that would reload the entire page, connect them with [Gatsby Link](https://www.gatsbyjs.com/docs/gatsby-link/) and get the preloaded page content blazingly fast on each click.

```
import React from 'react'
import { Link } from 'gatsby'

import { Container } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const NotFoundPage = () => (
  <Container column>
    <Headline>Oops, where did this page come from?</Headline>
    <Link to="/">← go back home</Link>
  </Container>
)

export default NotFoundPage
```

> If the user visits a page that doesn't exist, Gatsby will render 404 by default, but you can create a custom page for that.

Link is intended for Gatsby-only pages, for all external connections, you can still use the standard `<a>` element.

### Using Image

Images usually slow down your site and Gatsby is trying to fix this problem. In order to resize and compress, fix the aspect ratio, set in multiple formats and lazy load them, Gatsby must [process the images](https://www.gatsbyjs.com/docs/using-gatsby-image/).

Use the `gatsby-image` component, which will source your images from a directory with `gatsby-source-filesystem` and serve optimized images with `gatsby-plugin-sharp`. Make sure to configure the [gatsby-config.js](./gatsby-config.js) file with the correct path to the image folder.

```
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ImageLayout } from '../styles/ImageLayout'

export default () => (
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image-name.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ImageLayout>
      <Img fluid={data.file.childImageSharp.fluid} alt="Gatsby image" />
    </ImageLayout>
  )
}
```

Use the [Image](./src/components/Image.js) component to query all the images at build time and filter by the given name.

```
  <Image name="logo-gatsby-styled-components.png" alt="Gatsby image" minWidth="500px"></Image>
```

> This way, you won’t have to write the same query multiple times, but processing a large number of images can take a long time. If that happens, consider querying from an external image processing service (eg. [Sanity image pipeline](https://www.sanity.io/docs/asset-pipeline)).

For small images and icons a [static import with Webpack](https://www.gatsbyjs.com/docs/importing-assets-into-files/) is still an option. Similar to font files, make sure that the images are imported into the component so that Webpack will correctly move them into the public folder and provide the correct paths.

```
import React from "react"

import imgUrl from "../assets/images/image-name.jpg"
import { ImageLayout } from '../styles/ImageLayout'

export default () => (
  <ImageLayout>
    <img src={imgUrl} alt="Static image" />
  </ImageLayout>
)
```

### SEO Optimization

We put title and description metadata in the header of the document to help search engines understand the content of our site and know when it should appear in search results.

```
import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ children, title, description, image, location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="description" content={site.siteMetadata.description} />
      <title>{title}</title>

      ...

      {children}
    </Helmet>
  )
}

export default SEO

```

> Create an [SEO](./src/components/SEO.js) component with `react-helmet` that will make sure to add all metadata attributes to the static HTML pages that Gatsby builds. Then use it on all your [pages](./src/pages/contact.js) to provide the page title and any other information.

### Deploy

The deploy can be easily done on [Netlify](https://www.netlify.com/). In your account, simply create a new site from the Git repository. Select the `main` branch for production and `develop` for a staging environment. Netlify will recognize the `gatsby build` command and publish the `public` directory. Voilà! a Continuous Deployment (CD) is set.
