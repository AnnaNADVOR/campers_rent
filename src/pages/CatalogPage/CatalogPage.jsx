import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import AdvertsList from 'components/AdvertsList/AdvertsList';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import ButtonLoader from 'components/Loaders/ButtonLoader';
import Container from 'components/Container/Container';

import {
	isLast,
	selectFetchLoading,
	selectFetchError,
} from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';

import {
	CatalogSection,
	FilterPart,
	AdvertsPart,
	CatalogContainer,
} from './CatalogPage.styled';
import MainLoader from 'components/Loaders/MainLoader/MainLoader';
import Notification from 'components/Notification/Notification';

const CatalogPage = () => {
	const [adverts, setAdverts] = useState([]);
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const last = useSelector(isLast);
	const error = useSelector(selectFetchError);
	const loading = useSelector(selectFetchLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		let params = {};
		for (const [key, value] of searchParams.entries()) {
			params[key] = value;
		}

		dispatch(fetchAdverts({ page: page, limit: 4, filterParams: params })).then(
			response => {
				setAdverts(prevAdverbs => [...prevAdverbs, ...response.payload]);
			}
		);
	}, [dispatch, page, searchParams]);

	const onLoadMore = () => {
		setPage(prevPage => prevPage + 1);
	};
	
	return (
		<CatalogSection>
			<Container>
				<CatalogContainer>
					<FilterPart>
						<FilterPanel
							setSearchParams={setSearchParams}
							setAdverts={setAdverts}
							setPage={setPage}
							searchParams={searchParams}
						/>
					</FilterPart>
					<AdvertsPart>
						{loading && page === 1 && !error ? (
							<MainLoader />
						) : (
							<>
								{error ? (
									<Notification message="No items" />
								) : (
									<AdvertsList adverts={adverts} />
								)}
								{!last && adverts.length > 0 && !error && (
									<SecondaryButton
										text="Load more"
										type="submit"
										onClick={onLoadMore}
										loader={
											loading && page >= 2 && <ButtonLoader color="#d84343" />
										}
									/>
								)}
							</>
						)}
					</AdvertsPart>
				</CatalogContainer>
			</Container>
		</CatalogSection>
	);
};

export default CatalogPage;
