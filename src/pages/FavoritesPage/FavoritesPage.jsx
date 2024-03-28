import { useSelector } from "react-redux";

import { selectFavorites } from "../../redux/adverts/selectors";
import AdvertsList from "components/AdvertsList/AdvertsList";

const FavoritesPage = () => {
   
    const favorites = useSelector(selectFavorites); 
    
    return (
        <AdvertsList adverts={favorites} />       
    )
}

export default FavoritesPage; 