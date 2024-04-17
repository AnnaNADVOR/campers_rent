import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import AdvertsList from 'components/AdvertsList/AdvertsList';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';
// import { isLast, selectAdverts } from "../../redux/adverts/selectors";
import { isLast } from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';
import FilterPanel from 'components/FilterPanel/FilterPanel';
import { Catalog, FilterPart, AdvertsPart } from './CatalogPage.styled';
import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParam, setSearchParams] = useSearchParams();
  const last = useSelector(isLast);
  const dispatch = useDispatch();
  console.log(searchParam)
  useEffect(() => {
    dispatch(fetchAdverts({ page: page, limit: 4 })).then(response => {
      setAdverts(prevAdverbs => [...prevAdverbs, ...response.payload]);
    });
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Catalog>
      <FilterPart>
        <FilterPanel getSearchParams={setSearchParams} />
      </FilterPart>
      <AdvertsPart>
        <AdvertsList adverts={adverts} />
        {!last && (
          <SecondaryButton
            text="Load more"
            type="submit"
            onClick={onLoadMore}
          />
        )}
      </AdvertsPart>
    </Catalog>
  );
};

export default CatalogPage;
