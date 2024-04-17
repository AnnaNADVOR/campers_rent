import {
  Fieldset,
  Legend,
  Input,
  OptionContainer,
  Label,
  OptionInfo,
  InputsContainer,
} from './EquipmentFilter.styled';

const EquipmentFilter = ({ equipment, selectOption }) => {
  return (
    <Fieldset>
      <Legend>Vehicle equipment</Legend>
      <InputsContainer>
        {equipment.map(label => (
          <OptionContainer key={label.text}>
            <Label htmlFor={label.name}>
              <Input
                onChange={selectOption}
                type="checkbox"
                name={label.name}
                value={label.value}
              />
              <OptionInfo>
                <svg width="32px" height="32px" fill="none" stroke="black">
                  <use href={label.iconHref}></use>
                </svg>
                {label.text}
              </OptionInfo>
            </Label>
          </OptionContainer>
        ))}
      </InputsContainer>
    </Fieldset>
  );
};

export default EquipmentFilter;
