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
					<DefaultInfo>
						<p>
							You have not yet added any ad to your favorites. Add the ad to
							your favorites for easier access in the future.
						</p>
					</DefaultInfo>
				)}
			</Container>
		</FavoritesSection>
	);
};

export default FavoritesPage;
