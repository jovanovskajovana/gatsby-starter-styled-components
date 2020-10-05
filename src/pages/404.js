import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import { Layout } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const NotFoundPage = () => (
  <Page>
    <Layout column>
      <Headline>Oops, where did this page come from?</Headline>
      <Link to="/">← go back home</Link>
    </Layout>
  </Page>
)

export default NotFoundPage
