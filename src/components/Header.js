import React from 'react'
import { Link } from 'gatsby'
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri'

import HeaderLayout from '../styles/HeaderLayout'

const Header = ({ mode, toggleMode }) => (
  <HeaderLayout>
    <Link to="/contact">let's connect</Link>
    <button onClick={toggleMode}>{mode === 'light' ? <RiEyeFill /> : <RiEyeCloseFill />}</button>
  </HeaderLayout>
)

export default Header
