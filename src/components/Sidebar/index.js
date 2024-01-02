import React from 'react'
//import File from '../../SpotifyHandDetector.zip';
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
          <A><DownloadButton type = 'submit' onClick={() => {
                                window.open("https://www.dropbox.com/scl/fi/5fzkr75zvtvxdjmnugcs8/SpotifyHandDetector.zip?rlkey=jcwpbt7nhk5wp58r2962a6lol&dl=0", "_blank");
                                }} >Download</DownloadButton>
                  </A>
            {/* <A href={File} download='SpotifyHandDetector'><DownloadButton type = 'submit' >Download</DownloadButton></A> */}
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}
