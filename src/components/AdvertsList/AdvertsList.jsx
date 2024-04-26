import Advert from "../Advert/Advert";
import {
    List,
    AdvertItem,
} from "./AdvertsList.styled";

const AdvertsList = ({adverts}) => {   
    return (
        <List>  
            {adverts.map(advert => (
                <AdvertItem key={advert._id}>
                    <Advert advert={advert} />
                </AdvertItem>
            ))}               
        </List>           
    )
}

export default AdvertsList; 