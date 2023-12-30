import React from 'react'
import File from '../../SpotifyHandDetector.zip';
import { 
SidebarContainer, 
Icon, 
CloseIcon, 
SidebarWrapper, 
SidebarMenu, 
SidebarLink, 
SideBtnWrap, 
SidebarRoute,
A,
DownloadButton
} from './SidebarElements'

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="setup" onClick={toggle} offset={-80}>Setup</SidebarLink>
            <SidebarLink to="instructions" onClick={toggle} offset={-80}>Instructions</SidebarLink>
            <SidebarLink to="about" onClick={toggle} offset={-80}>About</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <A href={File} download='SpotifyHandDetector'><DownloadButton type = 'submit' >Download</DownloadButton></A>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}
