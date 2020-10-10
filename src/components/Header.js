import React from 'react'
import { Link } from 'gatsby'
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri'

import HeaderLayout from '../styles/HeaderLayout'
import { ButtonGhost } from '../styles/ButtonLayout'

const Header = ({ mode, toggleMode }) => (
  <HeaderLayout>
    <Link to="/contact">let's connect</Link>
    <ButtonGhost onClick={toggleMode}>
      {mode === 'light' ? <RiEyeFill /> : <RiEyeCloseFill />}
    </ButtonGhost>
  </HeaderLayout>
)

export default Header
