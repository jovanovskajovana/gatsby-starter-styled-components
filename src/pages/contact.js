import React from 'react'

import SEO from '../components/SEO'
import { Layout } from '../styles/PageLayout'
import { Headline } from '../styles/Typography'

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <Layout>
      <Headline>
        <a href="https://www.linkedin.com/in/jovanovskajovana/" target="_blank">
          click here
        </a>
      </Headline>
    </Layout>
  </>
)

export default ContactPage
