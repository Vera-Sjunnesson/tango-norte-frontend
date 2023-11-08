import React from 'react'
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const MenuButtonContainer = styled.button`
  background-size: cover;
  background-position: top;
  height: 129px;
  width: 100%;
  box-shadow: 7px 7px 19px 0px rgba(0, 0, 0, 0.50);
  color: var(--primary-color);
  font-size: 25px;
  font-weight: 500;
  line-height: 22px; /* 68.75% */
  letter-spacing: -0.408px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const MenuButton = ({ img, buttonText, to }) => {
  return (
    <MenuButtonContainer type="button" style={{ backgroundImage: `url(${img})`, backgroundPosition: 'top' }}>
      <NavLink to={`${to}`} className="underline">{buttonText}</NavLink>
    </MenuButtonContainer>
  )
}