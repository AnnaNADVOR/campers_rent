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

export const FilterByOptions = ({
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
			<InputsList>
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
			</InputsList>
		</Fieldset>
	);
};

export default FilterByOptions;
