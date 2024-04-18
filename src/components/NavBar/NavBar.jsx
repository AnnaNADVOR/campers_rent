// import { NavLink } from 'react-router-dom/dist';
import {
    Nav,
    NavList,
    NavListItem,
    Link
} from './NavBar.styled';

const NavBar = () => {
   return (
      <Nav>
         <NavList>
            <NavListItem>
               <Link to="/">Home</Link>
            </NavListItem>
            <NavListItem>
               <Link to="/catalog">Catalog</Link>
            </NavListItem>
            <NavListItem>
               <Link to="/favorites">Favorites</Link>
            </NavListItem>
         </NavList>
      </Nav>
   );
};

export default NavBar;
