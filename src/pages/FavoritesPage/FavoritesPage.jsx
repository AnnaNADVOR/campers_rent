import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/adverts/selectors';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import Container from 'components/Container/Container';
import { FavoritesSection, DefaultInfo } from './FavoritePage.styled';

const FavoritesPage = () => {
	const favorites = useSelector(selectFavorites);

	return (
		<FavoritesSection>
			<Container>
				{favorites.length ? (
					<AdvertsList adverts={favorites} />
				) : (
					<DefaultInfo>No</DefaultInfo>
				)}
			</Container>
		</FavoritesSection>
	);
};

export default FavoritesPage;
