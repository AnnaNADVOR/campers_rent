import Select from 'react-dropdown-select';
import { LocationLabel, LocationIcon } from './LocationFilter.styled';
import sprite from '../../../assets/icons/sprite.svg';

const LocationFilter = ({ changeLocation, selectOptions }) => {
  return (
    <LocationLabel htmlFor="location">
      Location
      <Select
        onChange={changeLocation}
        options={selectOptions}
        placeholder="Kyiv"
        name="location"
      />
      <LocationIcon>
        <use href={`${sprite}#mapPin`}></use>
      </LocationIcon>
    </LocationLabel>
  );
};

export default LocationFilter;
