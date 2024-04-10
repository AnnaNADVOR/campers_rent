import Select from 'react-dropdown-select';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectors';
import { LOCATION_OPTIONS } from 'services/selectLocationOptions';
import { useState } from 'react';
import sprite from "../../assets/icons/sprite.svg"

const FilterPanel = () => {

    const [filterParams, setFilterParams] = useState({});
    const selectLocation = (values) => {
        console.log(values)
        setFilterParams(prevParams => ({...prevParams, location: values[0].value}));
    }

    const EQUIPMENT_LABELS = [ 
        {
            name: "airConditioner",
            value: "1",
            iconHref: `${sprite}#AC`,
            text: "AC",
        },
        {
            name: "transmission",
            value: "automatic",
            iconHref: `${sprite}#transmission`,
            text: "Automatic",
        },
        {
            name: "kitchen",
            value: "1",
            iconHref: `${sprite}#kitchen`,
            text: "Kitchen",
        },
        {
            name: "TV",
            value: "1",
            iconHref: `${sprite}#TV`,
            text: "TV",
        },
        {
            name: "shower",
            value: "1",
            iconHref: `${sprite}#shower`,
            text: "Shower/WC",
  },
    ]
    return (
        <div> 
            <label>
                Location 
                <Select
                    options={LOCATION_OPTIONS}
                    placeholder='Kyiv,Ukraine'
                    onChange={selectLocation}                    
                />
            </label>
            <p>Filters</p>
            <fieldset>
                <legend>Vehicle equipment</legend>
                
                {EQUIPMENT_LABELS.map(label => (
                        <div key={label.text}>
                         <label htmlFor={label.text}>
                            <input
                                type="checkbox"
                                name={label.text}
                               
                            />
                            <div>
                                <svg width="32px" height="32px" fill="none" stroke="black">
                                    <use href={label.iconHref}></use>
                                </svg>
                                {label.text}
                            </div>
                        </label>
                        </div>
                    ))}
                        
                       
                    {/* <label htmlFor='AC'> 
                        <input type="checkbox" name="AC"/>
                    </label> */}
                
            </fieldset>

            
        </div>
    )
}

export default FilterPanel; 