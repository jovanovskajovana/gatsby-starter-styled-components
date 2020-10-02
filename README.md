# Gatsby starter with Styled Components

Here is a ready-to-use [Gatsby](https://www.gatsbyjs.com/) starter with Styled Components, ESLint, SEO optimization and more.

<img src='./src/assets/images/logo-gatsby-styled-components.png' width='340'>

## 🚀 Setup

With Gatsby, we can write React-based components that will be turned into static HTML, CSS, and JS at build time. Splitting the code by components makes it faster for users to load only what they need, and with route-based prefetching to get data based on the page they are currently on. All page content is server-side rendered, leading to extremely fast loading times and further optimization for search engine crawlers.

#### Basic setup

```
npm install -g gatsby-cli
```

> Make sure you have a recent version of [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) set on your machine, then install the [Gatsby CLI](https://www.gatsbyjs.com/tutorial/part-zero/#using-the-gatsby-cli).

```
gatsby new your-project-name https://github.com/jovanovskajovana/gatsby-starter-styled-components.git
```

> Create new poject from this starter. Remember to name it as you wish, navigate to that directory, run `npm run dev` and start the development mode available at http://localhost:8000.

## 🧐 Dive deeper

- [Styled Components](#styled-components)
- [Layout](#layout)
- [Link](#link)
- [Typography](#typography)
- [Image](#image)
- [Theming](#theming)
- [SEO](#seo)
- [Browser and SSR](#wrapPageElement)
- [Deploy](#deploy)

### Styled Components

Think of a reusable modules in the site and create a styled component for them. The rule of a thumb is to wrap each logical part to its own layout and nest all of the children selectors.

```
Example styled layout
```

You can create your own global styles normalizer with `createGlobalStyle`. Put it at the top of the main [Layout](#layout) component to share it over all pages.

```
Example global styles
```

### Layout

Lorem ipsum

### Link

Lorem ipsum

### Typography

Lorem ipsum

### Image

Lorem ipsum

### Theming

Notice how we added the `ThemeProvider` component at the top of our layout. That will give an access to the theme variables to all styled-components in the render tree.

```
Example theming
```

### Browser and SSR

Lorem ipsum

### SEO

Lorem ipsum

### Deploy

Lorem ipsum
