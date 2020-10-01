import styled from 'styled-components'

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 10rem;

  a {
    color: ${(props) =>
      props.theme === 'dark' ? props.theme.textPrimary : props.theme.textPrimary};
    font-weight: 600;
  }
`

export default HeaderLayout
