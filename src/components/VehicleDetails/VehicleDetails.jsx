const VehicleDetails = ({ advert }) => {
    return (
        <>
            <p>Vehicle details</p>
            <ul>
                <li>
                    <p>Form</p>
                    <p>{advert.form}</p>
                </li>
                <li>
                    <p>Length</p>
                    <p>{advert.length}</p>
                </li>
                <li>
                    <p>Width</p>
                    <p>{advert.width}</p>
                </li>
                <li>
                    <p>Height</p>
                    <p>{advert.height}</p>
                </li>
                <li>
                    <p>Tank</p>
                    <p>{advert.tank}</p>
                </li>
                <li>
                    <p>Consumption</p>
                    <p>{advert.consumption}</p>
                </li>
              
            </ul>
        </>
            )
    
}

export default VehicleDetails; 