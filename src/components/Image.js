import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { ImageLayout } from '../styles/ImageLayout'

const Image = ({ name, alt, minWidth }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find((item) => {
    return item.node.relativePath.includes(name)
  })

  if (!image) {
    return null
  }

  return (
    <ImageLayout minWidth={minWidth}>
      <Img fluid={image.node.childImageSharp.fluid} alt={alt} />
    </ImageLayout>
  )
}

export default Image
