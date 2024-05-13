import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
	LOCATION_OPTIONS,
	EQUIPMENT_OPTIONS,
	VEHICLE_OPTIONS,
} from '../../constants/index';

import LocationFilter from './LocationFilter/LocationSelect';
import FilterByOptions from './FilterByOptions/FilterByOptions';
import MainButton from '../Buttons/MainButton/MainButton';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';

import {
	FilterEquipmentContainer,
	FilterFormContainer,
	FilterPanelContainer,
	ButtonsList,
} from './FilterPaner.styled';

const FilterPanel = ({
	setSearchParams,
	setAdverts,
	setPage,
	searchParams,
	filterRef,
	filterParams,
	setFilterParams,
	setSortOption,
	currentSearchParams,
}) => {
	
	const [checkRadioValue, setCheckRadioValue] = useState(`${filterParams.form}`);
	const selectRef = useRef();
	const defaultSelectValues = [];
	const location = useLocation();
			
	if (location.search.includes("location") && filterParams.location) {
		const locationItems = filterParams.location.split(", ")
		defaultSelectValues.push({ label: locationItems[1], value: filterParams.location });	
	}

	const handleSelectLocation = values => {		
		if (!values.length) {			
			setFilterParams(prevParams => {
				const { location: _, ...rest } = prevParams;
				return { ...rest };
			});
			return;
		}

		setFilterParams(prevParams => ({
			...prevParams,
			location: values[0].value,
		}));
	};

	const handleSelectEquipment = event => {
		if (event.target.checked) {
			setFilterParams(prevParams => ({
				...prevParams,
				[`details[${event.target.name}]`]: event.target.value,
			}));
		} else {
			setFilterParams(prevPrams => {
				const { [`details[${event.target.name}]`]: _, ...rest } = prevPrams;
				return { ...rest };
			});
		}
	};

	const handleSelectVehicleForm = event => {
		if (event.target.value === checkRadioValue) {
			setFilterParams(prevPrams => {
				const { [event.target.name]: _, ...rest } = prevPrams;
				return { ...rest };
			});
			event.target.checked = false;
			setCheckRadioValue('');
			return;
		}

		setFilterParams(prevParams => ({
			...prevParams,
			form: event.target.value,
		}));
		setCheckRadioValue(event.target.value);
	};

	const handleSubmitForm = event => {
		event.preventDefault();
		if (JSON.stringify(currentSearchParams) === JSON.stringify(filterParams)) {
			return;
		}

		if (Object.keys(filterParams).length > 0) {
			setAdverts([]);
			setPage(1);
			setSortOption();
			setSearchParams({ ...filterParams });
		}
		
		return;
	};

	const handleResetClick = () => {
		if (searchParams.size > 0) {
			setAdverts([]);
			setPage(1);
			setSortOption();
			setSearchParams();
		}
		selectRef.current?.clearAll();
		[...filterRef.current?.elements].forEach(input => {
			if (input.type === 'checkbox' || input.type === 'radio') {
				input.checked = false;
			}
		});
		setFilterParams({});
		setCheckRadioValue('');
	};

	return (
		<form onSubmit={handleSubmitForm} ref={filterRef}>
			<FilterPanelContainer >
				<LocationFilter
					selectOptions={LOCATION_OPTIONS}
					changeLocation={handleSelectLocation}
					selectRef={selectRef}
					defaultSelectValues={defaultSelectValues}			
				/>
				<FilterEquipmentContainer>
					Filters
					<FilterByOptions
						title="Vehicle equipment"
						options={EQUIPMENT_OPTIONS}
						selectOption={handleSelectEquipment}
						inputType="checkbox"
						location = {location}
					/>
				</FilterEquipmentContainer>
				<FilterFormContainer>
					<FilterByOptions
						title="Vehicle type"
						options={VEHICLE_OPTIONS}
						selectOption={handleSelectVehicleForm}
						inputType="radio"
						radioName="form"
						filterParams={filterParams}
						location = {location}
					/>
				</FilterFormContainer>
			</FilterPanelContainer>
			<ButtonsList>
				<li>
					<MainButton text="Search" type="submit" />
				</li>
				<li>
					<SecondaryButton
						text="Show All"
						type="button"
						onClick={handleResetClick}
					/>
				</li>
			</ButtonsList>
			{/* {Object.keys(filterParams).length > 0 && (
				<ButtonsList>
					<li>
						<MainButton text="Search" type="submit"/>
					</li>
					<li>
						<SecondaryButton
							text="Reset"
							type="button"
							onClick={handleResetClick}
						/>
					</li>
				</ButtonsList>
			)} */}
		</form>
	);
};

export default FilterPanel;
