import LOCATION_OPTIONS from 'services/selectLocationOptions';
import EQUIPMENT_OPTIONS from 'services/equipmentFilterOptions';
import { useState } from 'react';
import LocationFilter from './LocationFilter/LocationFilter';
import EquipmentFilter from './EquipmentFilter/EquipmentFilter';

const FilterPanel = () => {

    const [filterParams, setFilterParams] = useState({});
    const handleSelectLocation = (values) => {
        setFilterParams(prevParams => ({...prevParams, location: values[0].value}));
    }

    const handleSelectEquipment = (event) => {
        if (event.target.checked) {
            setFilterParams(prevParams => ({ ...prevParams, [event.target.name]: event.target.value }));
        } else {
            setFilterParams(prevPrams => {
                const { [event.target.name]: _, ...rest } = prevPrams;
                return {...rest}
            })            
        }        
    }
    console.log(filterParams)
    return (
        <div> 
            <LocationFilter selectOptions={LOCATION_OPTIONS} changeLocation={handleSelectLocation} />
            <EquipmentFilter equipment={EQUIPMENT_OPTIONS} selectOption={handleSelectEquipment}/>           
        </div>
    )
}

export default FilterPanel; 