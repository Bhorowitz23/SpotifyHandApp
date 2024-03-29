import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    // max-width: 1100px;
`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    // margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 175px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;
export const NavItem = styled.li`
    height: 80px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        background: #01bf71;
        transition: all 0.2s ease-in-out;
    }
    
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    

    &.active {
        border-bottom: 3px solid #01bf71;
    }
    
`;

export const NavBtn = styled.button`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    color: #010606;
    padding: 12px 20px;
    font-size: 16px;
    outline: none;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    // display: flex;
    // justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    // text-decoration: underline;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
        }
    
        @media screen and (max-width: 768px){
            display: none;
        }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const A = styled.a`
    text-decoration: none;
`