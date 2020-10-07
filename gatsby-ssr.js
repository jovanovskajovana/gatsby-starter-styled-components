import React from 'react'

import Page from './src/components/Page'

export function wrapPageElement({ element, props }) {
  return <Page {...props}>{element}</Page>
}
