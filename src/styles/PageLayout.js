import styled from 'styled-components'

const PageLayout = styled.div`
  display: flex;
  background: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary};
  height: ${(props) => props.theme.height};
  width: ${(props) => props.theme.width};
`

const Layout = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: ${(props) => (props.height ? props.height : props.theme.height)};
  width: ${(props) => (props.width ? props.width : props.theme.width)};
`

export { PageLayout, Layout }
