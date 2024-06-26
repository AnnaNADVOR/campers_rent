import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import ButtonLoader from 'components/Loaders/ButtonLoader';
import Container from 'components/Container/Container';
import sprite from '../../assets/icons/sprite.svg';

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
import SortedSelect from 'components/SortedSelect/SortedSelect';


const CatalogPage = () => {

	const [adverts, setAdverts] = useState([]);
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const [sortOption, setSortOption] = useState();
	const last = useSelector(isLast);
	const error = useSelector(selectFetchError);
	const loading = useSelector(selectFetchLoading);
	const dispatch = useDispatch();
	const filterRef = useRef();
	let params = {};
	for (const [key, value] of searchParams.entries()) {
		params[key] = value;
	}
	const [filterParams, setFilterParams] = useState(params);

	useEffect(() => {
		let params = {};
		for (const [key, value] of searchParams.entries()) {
			params[key] = value;
		}

		dispatch(fetchAdverts({ page: page, limit: 4, filterParams: params })).then(
			response => {
				if (response.type === 'adverts/fetchAdverts/fulfilled') {
					setAdverts(prevAdverbs => [...prevAdverbs, ...response.payload]);
				}
			}
		);
	}, [dispatch, page, searchParams]);

	useEffect(() => {
		setPage(1);
		setAdverts([]);
	}, [sortOption]);

	const onLoadMore = () => {
		setPage(prevPage => prevPage + 1);
	};

	return (
		<HelmetProvider>
			<Helmet>
				<title>Catalog</title>
			</Helmet>
			<CatalogSection>
				<Container>
					<CatalogContainer>
						<FilterPart>
							<FilterPanel
								searchParams={searchParams}
								setSearchParams={setSearchParams}
								setAdverts={setAdverts}
								setPage={setPage}
								filterParams={filterParams}
								setFilterParams={setFilterParams}
								setSortOption={setSortOption}
								filterRef={filterRef}
								currentSearchParams = {params}

							/>
						</FilterPart>
						<AdvertsPart>
							{!error && (
								<SortedSelect
									sortOption={sortOption}
									setSortOption={setSortOption}
									setSearchParams={setSearchParams}
									searchParams={searchParams}
									setAdverts={setAdverts}
									setPage={setPage}
								/>
							)}
							{loading && page === 1 && !error ? (
								<MainLoader />
							) : (
								<>
									{error && adverts.length<=0 ? (
										<Notification
											message="No matching items found"
											comment="Try changing your search parameters"
											iconHref={`${sprite}#search`}
										/>
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
		</HelmetProvider>
	);
};

export default CatalogPage;
