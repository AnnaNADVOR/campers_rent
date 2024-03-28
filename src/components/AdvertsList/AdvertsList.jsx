import Advert from "./Advert/Advert";
import { List } from "./AdvertsList.styled";

const AdvertsList = ({adverts}) => {   
    return (
        <List>  
            {adverts.map(advert => (
                <li key={advert._id}>
                    <Advert advert={advert} />
                </li>
            ))}               
        </List>           
    )
}

export default AdvertsList; 