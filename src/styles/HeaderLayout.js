import styled from 'styled-components'

import breakpoints from '../constants/breakpoints'

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 10rem;

  @media (max-width: ${breakpoints.screenMD}) {
    padding: 2rem 5rem;
  }

  @media (max-width: ${breakpoints.screenSM}) {
    padding: 1.5rem 2rem;
  }

  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.textPrimary};
  }
`

export default HeaderLayout
