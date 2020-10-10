import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import { Layout } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const NotFoundPage = () => (
  <>
    <SEO title="Not Found" />
    <Layout column>
      <Headline>Oops, where did this page come from?</Headline>
      <Link to="/">← go back home</Link>
    </Layout>
  </>
)

export default NotFoundPage
