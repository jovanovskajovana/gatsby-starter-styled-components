import styled from 'styled-components'

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 10rem;

  a {
    color: ${(props) => props.theme.textPrimary};
    font-weight: 400;
  }
`

export default HeaderLayout
