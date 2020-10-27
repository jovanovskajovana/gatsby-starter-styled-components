import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/SEO'
import { Container } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const NotFoundPage = () => (
  <>
    <SEO title="Not Found" />
    <Container column>
      <Headline>Oops, where did this page come from?</Headline>
      <Link to="/">← go back home</Link>
    </Container>
  </>
)

export default NotFoundPage
