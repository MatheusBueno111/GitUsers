import React from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'
import Icon from '../Logo'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Icon />
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favoritos</NavLink>
      </div>
    </HeaderContainer>
  )
}
