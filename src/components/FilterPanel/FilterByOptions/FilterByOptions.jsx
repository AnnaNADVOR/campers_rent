import {
	Fieldset,
	Legend,
	Input,
	OptionContainer,
	Label,
	OptionInfo,
	InputsContainer,
	OptionIcon,
} from './FilterByOptions.styled';

export const FilterByOption = ({
	options,
	selectOption,
	title,
	inputType,
	radioName,
	onClick,
}) => {
	return (
		<Fieldset>
			<Legend>{title}</Legend>
			<InputsContainer>
				{options.map(option => (
					<OptionContainer key={option.text}>
						<Label htmlFor={option.name}>
							<Input
								onChange={selectOption}
								onClick={onClick}
								type={inputType}
								name={inputType === 'radio' ? radioName : option.name}
								value={option.value || option.name}
							/>
							<OptionInfo>
								<OptionIcon>
									<use href={option.iconHref}></use>
								</OptionIcon>
								{option.text}
							</OptionInfo>
						</Label>
					</OptionContainer>
				))}
			</InputsContainer>
		</Fieldset>
	);
};

export default FilterByOption;
