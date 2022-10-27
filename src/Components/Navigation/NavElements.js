import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Link as scroll} from 'react-scroll'


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  //margin-top: -70px
  background: #eef1f1;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 850px) {
    transition: 0.6s all ease;
  }
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`
export const NavLogo = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  color: darkblue;
  font-size: 2rem;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`

export const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: darkblue;
    font-size: 1.8rem;
    transform: translate(-120%, 50%);
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -22px; // zobaczyć czy inna wartość będzie ok
  list-style: none;
  text-align: center;


  @media screen and (max-width: 850px) {
    display: none;
  }
`

export const MenuItem = styled.li`
  height: 70px;
`

export const MenuItemLink = styled(scroll)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: darkblue;
  text-decoration: none;
  cursor: pointer;

  // kreska podkreślająca ma się poajwiać przy przeijaniu i przeskakiwaniu
  &.active {
    border-bottom: 4px solid darkblue;
  }
`
export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: none;
  }
`

export const ButtonLink = styled(Link)`
  background: darkblue;
  color: white;
  border-radius: 50px;
  padding: 12px 20px;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  border: none;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #20ba74;
    color: white;
  }
`