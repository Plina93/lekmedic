import React from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    Nav,
    NavContainer,
    NavLogo,
    Hamburger,
    Menu,
    MenuItem,
    MenuItemLink,
    NavButton,
    ButtonLink
}
    from "./NavElements";


const Navigation = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to={'/'} onClick={toggleHome}>Lekmedic</NavLogo>
                    <Hamburger onClick={toggle}>
                        <FaBars/>
                    </Hamburger>
                    <Menu>
                        <MenuItem>
                            <MenuItemLink to={'aboutUs'} smooth={true} duration={500} spy={true} exact='true'
                                          offset={-70}>O nas</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={'doctors'} smooth={true} duration={500} spy={true} exact='true'
                                          offset={-70}>Nasi lekarze</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={'laboratory'} smooth={true} duration={500} spy={true} exact='true'
                                          offset={-70}>Badania laboratoryjne</MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={'contact'} smooth={true} duration={500} spy={true} exact='true'
                                          offset={-70}>Kontakt</MenuItemLink>
                        </MenuItem>
                    </Menu>
                    <NavButton>
                        <ButtonLink to={'/signIn'}>Zaloguj się</ButtonLink>
                    </NavButton>
                </NavContainer>
            </Nav>
        </>
    );
};

export default Navigation