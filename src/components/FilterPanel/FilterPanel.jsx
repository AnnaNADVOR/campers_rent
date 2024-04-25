import { useRef, useState } from 'react';
import {
	LOCATION_OPTIONS,
	EQUIPMENT_OPTIONS,
	VEHICLE_OPTIONS,
} from '../../constants/index';
import LocationFilter from './LocationFilter/LocationFilter';
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
}) => {
	const [filterParams, setFilterParams] = useState({});
	const [checkRadioValue, setCheckRadioValue] = useState('');
	const formRef = useRef();
	const selectRef = useRef();

	const handleSelectLocation = values => {
		if (!values.length) {
			setFilterParams(prevPrams => {
				const { location: _, ...rest } = prevPrams;
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
		console.dir(event.target);
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
			setSearchParams({ ...filterParams });
		}
		return;
	};

	const onRadioInputClick = event => {
		if (event.target.value === checkRadioValue) {
			console.dir('click check', event.target);
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
			setSearchParams();
		}
		selectRef.current?.clearAll();
		[...formRef.current?.elements].forEach(input => {
			if (input.type === 'checkbox' || input.type === 'radio') {
				input.checked = false;
			}
		});
		setFilterParams({});
		setCheckRadioValue('');
	};

	return (
		<form onSubmit={handleSubmitForm} ref={formRef}>
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
					/>
				</FilterFormContainer>
			</FilterPanelContainer>
			{Object.keys(filterParams).length > 0 && (
				<ButtonsList>
					<li>
						<MainButton
							text="Search"
							type="submit"
						/>
					</li>
					<li>
						<SecondaryButton
							text="Reset"
							type="button"
							onClick={handleResetClick}
						/>
					</li>
				</ButtonsList>
			)}
		</form>
	);
};

export default FilterPanel;
