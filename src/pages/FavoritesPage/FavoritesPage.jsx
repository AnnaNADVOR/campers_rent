import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import AdvertsList from 'components/AdvertsList/AdvertsList';
import Container from 'components/Container/Container';

import { selectFavorites } from '../../redux/adverts/selectors';

import { FavoritesSection, DefaultInfo } from './FavoritesPage.styled';

const FavoritesPage = () => {
	const favorites = useSelector(selectFavorites);

	return (
		<HelmetProvider>
			<Helmet>
				<title>Favorites</title>
			</Helmet>
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
		</HelmetProvider>
	);
};

export default FavoritesPage;
