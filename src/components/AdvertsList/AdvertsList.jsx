import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { isLast } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
import Advert from "./Advert/Advert";
import { List } from "./AdvertsList.styled";
import SecondaryButton from "components/Buttons/SecondaryButton/SecondaryButton";

const AdvertsList = () => {
    const [adverts, setAdverts] = useState([])
    const [page, setPage] = useState(1);     
    const last = useSelector(isLast);          
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdverts({ page: page, limit: 4 }))
            .then(response => {
            setAdverts(prevAdverbs => [...prevAdverbs, ...response.payload]);            
        });        
    }, [dispatch, page]);

    const onLoadMore = () => {        
    setPage(prevPage => prevPage + 1)
    }
       
    return (
        <>
        <List>
            {adverts.map(advert => (
                <li key={advert._id}>
                    <Advert advert={advert}/>
                </li>
            ))}
        </List>
            {!last && (
               <SecondaryButton text="Load more" type="submit" onClick={onLoadMore} />               
           )}
              
        </>
    )
}

export default AdvertsList; 