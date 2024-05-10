import { useRef, useState } from 'react';
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
}) => {
	const [checkRadioValue, setCheckRadioValue] = useState('');
	const selectRef = useRef();

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
		setFilterParams(prevParams => ({
			...prevParams,
			form: event.target.value,
		}));
		setCheckRadioValue(event.target.value);
	};

	const handleSubmitForm = event => {
		event.preventDefault();
		if (Object.keys(filterParams).length > 0) {
			setAdverts([]);
			setPage(1);
			setSortOption();
			localStorage.setItem('Params', JSON.stringify(filterParams));
			setSearchParams({ ...filterParams });
		}
		return;
	};

	const onRadioInputClick = event => {
		if (event.target.value === checkRadioValue) {
			setFilterParams(prevPrams => {
				const { [event.target.name]: _, ...rest } = prevPrams;
				return { ...rest };
			});
			event.target.checked = false;
			setCheckRadioValue('');
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
			<FilterPanelContainer>
				<LocationFilter
					selectOptions={LOCATION_OPTIONS}
					changeLocation={handleSelectLocation}
					selectRef={selectRef}
				/>
				<FilterEquipmentContainer>
					Filters
					<FilterByOptions
						title="Vehicle equipment"
						options={EQUIPMENT_OPTIONS}
						selectOption={handleSelectEquipment}
						inputType="checkbox"
					/>
				</FilterEquipmentContainer>
				<FilterFormContainer>
					<FilterByOptions
						title="Vehicle type"
						options={VEHICLE_OPTIONS}
						selectOption={handleSelectVehicleForm}
						onClick={onRadioInputClick}
						inputType="radio"
						radioName="form"
						filterParams={filterParams}
					/>
				</FilterFormContainer>
			</FilterPanelContainer>
			<ButtonsList>
				<li>
					<MainButton text="Search" type="submit" />
				</li>
				<li>
					<SecondaryButton
						text="Reset"
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
