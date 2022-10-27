import styled from 'styled-components'
import {IoCloseSharp} from 'react-icons/io5'
import {Link as scroll} from 'react-scroll'
import {Link as Link} from 'react-router-dom'


export const SidebarContainer = styled.aside`
  display: grid;
  align-items: center;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #2a4858;
  z-index: 999; //żeby było ponad wszystko
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(IoCloseSharp)`
  color: white;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2.5rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`

export const SidebarWrapper = styled.div`
  color: white;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`

export const SidebarLink = styled(scroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: white;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #20ba74;
    transition: 0.3s ease-in-out;
  }
`

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center
`

export const SidebarButton = styled(Link)`
  border-radius: 50px;
  background: white;
  padding: 20px 64px;
  color: darkblue;
  white-space: nowrap;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;


  &:hover {
    transition: all 0.3s ease-in-out;
    background: #20ba74;
    color: white
  }

`