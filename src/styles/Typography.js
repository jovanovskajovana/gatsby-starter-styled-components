import styled, { createGlobalStyle } from 'styled-components'

import fontBold from '../assets/fonts/Ubuntu-Bold.ttf'
import fontBoldItalic from '../assets/fonts/Ubuntu-Bold.ttf'
import fontRegular from '../assets/fonts/Ubuntu-Regular.ttf'
import fontItalic from '../assets/fonts/Ubuntu-Italic.ttf'
import fontLight from '../assets/fonts/Ubuntu-Light.ttf'
import fontLightItalic from '../assets/fonts/Ubuntu-LightItalic.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontBold});
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontBoldItalic});
    font-style: italic;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontRegular});
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontItalic});
    font-style: italic;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontLight});
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${fontLightItalic});
    font-style: italic;
    font-weight: 200;
  }
`

const Headline = styled.h1`
  font-size: 3em;
  font-weight: 600;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`

const Subtitle = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transofrm: uppercase;
`

const Paragraph = styled.p`
  font-size: 0.8em;
  font-weight: 400;
`

export { Typography, Headline, Title, Subtitle, Paragraph }
