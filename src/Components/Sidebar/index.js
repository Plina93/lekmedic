import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrapper,
    SidebarButton
}
    from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={'aboutUs'} onClick={toggle}>O nas</SidebarLink>
                    <SidebarLink to={'doctors'} onClick={toggle}>Nasi lekarze</SidebarLink>
                    <SidebarLink to={'laboratory'} onClick={toggle}>Badania laboratoryjne</SidebarLink>
                    <SidebarLink to={'contact'} onClick={toggle}>Kontakt</SidebarLink>
                </SidebarMenu>
                <SideBtnWrapper>
                    <SidebarButton to={'signIn'}>Zaloguj się!</SidebarButton>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar