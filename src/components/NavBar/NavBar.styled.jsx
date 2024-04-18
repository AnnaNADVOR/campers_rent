import styled from "@emotion/styled"; 
import { NavLink } from 'react-router-dom/dist';
  
export const Nav = styled.nav`
    /* display: flex;
    justify-content: center; 
    align-items: center;    */
    margin-left: 50px; 

`

export const NavList = styled.ul`
display: flex; 

`

export const NavListItem = styled.li`
&:not(:last-child) {
    margin-right: 50px; 
}
`

export const Link = styled(NavLink)`
display: block;
position: relative;
  padding-top: 30px; 
    padding-bottom: 30px; 
    font-size:14px;
    font-weight: 500; 
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.darkblue};

    &.active:after {

    position: absolute;
    top: 73px;
    display: block;
    content: "";
    width: 100%;
    border-bottom: 5px solid #E44848;
    border-radius: 5px;
    }
`