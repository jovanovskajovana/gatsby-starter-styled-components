import React from 'react'

import SEO from '../components/SEO'
import { Contaner } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const HomePage = () => (
  <>
    <SEO title="Home" />
    <Contaner>
      <Headline>hi, you</Headline>
    </Contaner>
  </>
)

export default HomePage
