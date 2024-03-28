import VehicleDetails from "components/VehicleDetails/VehicleDetails";
import FeaturesList from "../FeaturesList/FeaturesList";
import { TabContainer } from "./FeaturesTab.styled";

const FeaturesTab = ({ advert }) => {
    return ( 
        <TabContainer>
            <FeaturesList advert={advert} />
            <VehicleDetails advert={advert}/>
        </TabContainer>
    )
    

}

export default FeaturesTab; 