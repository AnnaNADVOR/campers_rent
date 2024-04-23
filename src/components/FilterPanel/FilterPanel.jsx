import { useRef, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectLoadingAdverts } from '../../redux/adverts/selectors';
import ButtonLoader from 'components/Loaders/ButtonLoader';
import SecondaryButton from 'components/Buttons/SecondaryButton/SecondaryButton';

const FilterPanel = ({
	setSearchParams,
	setAdverts,
	setPage,
	searchParams,
}) => {
	const [filterParams, setFilterParams] = useState({});
	const [checkRadioValue, setCheckRadioValue] = useState('');
	const loader = useSelector(selectLoadingAdverts);
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
						onClick={onRadioInputClick}
						inputType="radio"
						radioName="form"
					/>
				</FilterFormContainer>
			</FilterPanelContainer>
			{Object.keys(filterParams).length > 0 && (
				<ul>
					<li>
						<MainButton text="Search" type="submit" />{' '}
					</li>
					<li>
						<SecondaryButton
							text="Reset"
							type="button"
							onClick={handleResetClick}
						/>
					</li>
				</ul>
			)}
		</form>
	);
};

export default FilterPanel;
