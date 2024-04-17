import { useState } from 'react';
import LOCATION_OPTIONS from '../../services/filterOptions/selectLocationOptions';
import EQUIPMENT_OPTIONS from '../../services/filterOptions/equipmentFilterOptions';
import VEHICLE_OPTIONS from '../../services/filterOptions/vehicleFilterOptions';
import LocationFilter from './LocationFilter/LocationFilter';
import FilterByOption from './FilterByOptions/FilterByOptions';
import {
  FilterEquipmentContainer,
  FilterFormContainer,
  FilterPanelContainer,
} from './FilterPaner.styled';
import MainButton from '../Buttons/MainButton/MainButton';

const FilterPanel = ({ getSearchParams }) => {
  const [filterParams, setFilterParams] = useState({});
  const handleSelectLocation = values => {
    setFilterParams(prevParams => ({
      ...prevParams,
      location: values[0].value,
    }));
  };

  const handleSelectEquipment = event => {
    if (event.target.checked) {
      setFilterParams(prevParams => ({
        ...prevParams,
        [event.target.name]: event.target.value,
      }));
    } else {
      setFilterParams(prevPrams => {
        const { [event.target.name]: _, ...rest } = prevPrams;
        return { ...rest };
      });
    }
  };

  const handleSelectVehicleForm = event => {
    setFilterParams(prevParams => ({
      ...prevParams,
      form: event.target.value,
    }));
  };

  const handleSubmitForm = event => {
    getSearchParams({ ...filterParams });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <FilterPanelContainer>
        <LocationFilter
          selectOptions={LOCATION_OPTIONS}
          changeLocation={handleSelectLocation}
        />
        <FilterEquipmentContainer>
          Filters
          <FilterByOption
            title="Vehicle equipment"
            options={EQUIPMENT_OPTIONS}
            selectOption={handleSelectEquipment}
            inputType="checkbox"
          />
        </FilterEquipmentContainer>
        <FilterFormContainer>
          <FilterByOption
            title="Vehicle type"
            options={VEHICLE_OPTIONS}
            selectOption={handleSelectVehicleForm}
            inputType="radio"
            radioName="form"
          />
        </FilterFormContainer>
      </FilterPanelContainer>
      <MainButton text="Search" type="submit" />
    </form>
  );
};

export default FilterPanel;
