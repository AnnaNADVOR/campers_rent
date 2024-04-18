import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';
// import { isLast, selectAdverts } from "../../redux/adverts/selectors";
import {
	isLast,
	selectLoadingAdverts,
} from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import { Catalog, FilterPart, AdvertsPart } from './CatalogPage.styled';
import { useSearchParams } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';

const CatalogPage = () => {
	const [adverts, setAdverts] = useState([]);
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const last = useSelector(isLast);
	const loading = useSelector(selectLoadingAdverts);
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
		<Catalog>
			<FilterPart>
				<FilterPanel
					setSearchParams={setSearchParams}
					setAdverts={setAdverts}
					setPage={setPage}
				/>
			</FilterPart>
			<AdvertsPart>
				{loading && page === 1 ? (
					<MagnifyingGlass />
				) : (
					<>
						<AdvertsList adverts={adverts} />
						{!last && adverts.length > 0 && (
							<SecondaryButton
								text="Load more"
								type="submit"
								onClick={onLoadMore}
							/>
						)}
					</>
				)}
				{/* <AdvertsList adverts={adverts} />
						{!last && adverts.length > 0 && (
							<SecondaryButton
								text="Load more"
								type="submit"
								onClick={onLoadMore}
							/>
						)} */}
			</AdvertsPart>
		</Catalog>
	);
};

export default CatalogPage;
