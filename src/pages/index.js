import React from 'react'

import SEO from '../components/SEO'
import { Layout } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Headline>hi, you</Headline>
    </Layout>
  </>
)

export default HomePage
