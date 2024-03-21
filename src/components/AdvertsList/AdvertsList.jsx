import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAdverts } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
import Advert from "./Advert/Advert";
import { List } from "./AdvertsList.styled";

const AdverstList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);
    const adverts = useSelector(getAdverts);     
    return (
        <List>
            {adverts.map(advert => (
                <li key={advert._id}>
                    <Advert advert={advert}/>
                </li>
            ))}
        </List>
    )
}

export default AdverstList; 