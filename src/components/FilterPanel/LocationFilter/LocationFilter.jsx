import Select from 'react-dropdown-select';
import { LocationLabel, LocationIcon } from './LocationFilter.styled';
import sprite from '../../../assets/icons/sprite.svg';

const LocationFilter = ({ changeLocation, selectOptions, selectRef}) => {
	return (
		<LocationLabel htmlFor="location">
			Location
      <Select
        ref= {selectRef}
				onChange={changeLocation}
				options={selectOptions}
				placeholder="Kyiv"
				name="location"
				clearable
			/>
			<LocationIcon>
				<use href={`${sprite}#mapPin`}></use>
			</LocationIcon>
		</LocationLabel>
	);
};

export default LocationFilter;
