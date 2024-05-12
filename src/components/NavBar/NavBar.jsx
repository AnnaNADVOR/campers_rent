import { useSelector } from 'react-redux';
import { Nav, NavList, NavListItem, Link } from './NavBar.styled';
import { selectFavorites } from '../../redux/adverts/selectors';

const NavBar = () => {
	const favorites = useSelector(selectFavorites);
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
					<Link to="/favorites">
						Favorites
						{favorites.length > 0 && <span>{favorites.length}</span>}
					</Link>
				</NavListItem>
			</NavList>
		</Nav>
	);
};

export default NavBar;
