import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const NotFoundPage = () => (
  <Layout column>
    <Headline>Oops, where did this page come from?</Headline>
    <Link to="/">← go back home</Link>
  </Layout>
)

export default NotFoundPage
