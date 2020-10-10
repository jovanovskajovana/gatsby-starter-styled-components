import styled from 'styled-components'

const ImageLayout = styled.div`
  min-width: ${(props) => (props.minWidth ? props.minWidth : '200px')};
`

export { ImageLayout }
