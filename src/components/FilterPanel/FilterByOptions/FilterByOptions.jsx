import {
	Fieldset,
	Legend,
	Input,
	OptionContainer,
	Label,
	OptionInfo,
	InputsList,
	OptionIcon,
} from './FilterByOptions.styled';

import { useLocation } from 'react-router-dom';
export const FilterByOptions = ({
	options,
	selectOption,
	title,
	inputType,
	radioName,
	onClick,
}) => {
	const location = useLocation();

	return (
		<Fieldset>
			<Legend>{title}</Legend>
			<InputsList>
				{options.map(option => {
					const input = document.querySelector(`#${option.name}`);
					if (!!location && !!input && location.search.includes(input.id)) {
						input.setAttribute('checked', 'true');
					}
					return (
						<OptionContainer key={option.text}>
							<Label htmlFor={option.name}>
								<Input
									onChange={selectOption}
									onClick={onClick}
									type={inputType}
									name={inputType === 'radio' ? radioName : option.name}
									value={option.value || option.name}
									id={option.name}
								/>
								<OptionInfo>
									<OptionIcon>
										<use href={option.iconHref}></use>
									</OptionIcon>
									{option.text}
								</OptionInfo>
							</Label>
						</OptionContainer>
					);
				})}
			</InputsList>
		</Fieldset>
	);
};

export default FilterByOptions;
