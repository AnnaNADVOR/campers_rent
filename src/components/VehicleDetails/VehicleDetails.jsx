import {
    Title,
    List,
    Item,
} from "./VehicleDetails.styled";
const VehicleDetails = ({ advert }) => {
    return (
        <div>
            <Title>Vehicle details</Title>
            <List>
                <Item>
                    <p>Form</p>
                    <p>{advert.form}</p>
                </Item>
                <Item>
                    <p>Length</p>
                    <p>{advert.length}</p>
                </Item>
                <Item>
                    <p>Width</p>
                    <p>{advert.width}</p>
                </Item>
                <Item>
                    <p>Height</p>
                    <p>{advert.height}</p>
                </Item>
                <Item>
                    <p>Tank</p>
                    <p>{advert.tank}</p>
                </Item>
                <Item>
                    <p>Consumption</p>
                    <p>{advert.consumption}</p>
                </Item>              
            </List>
        </div>
            )
    
}

export default VehicleDetails; 