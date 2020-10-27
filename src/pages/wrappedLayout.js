import React from 'react'

import Page from '../components/Page'
import SEO from '../components/SEO'
import { Container } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

// This is an example page with wrapped layout.
// You have to decide whether to wrap all pages inside
// the Page component this way, or let Gatsby do it
// for you with the wrapPageElement plugin.

const WrappedLayoutPage = () => (
  <Page>
    <SEO title="Example" />
    <Container>
      <Headline>this is an example page with wrapped layout</Headline>
    </Container>
  </Page>
)

export default WrappedLayoutPage
