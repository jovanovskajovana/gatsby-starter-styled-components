import React from 'react'

import SEO from '../components/SEO'
import { Container } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <Container>
      <Headline>
        <a href="https://www.linkedin.com/in/jovanovskajovana/" target="_blank">
          click here
        </a>
      </Headline>
    </Container>
  </>
)

export default ContactPage
