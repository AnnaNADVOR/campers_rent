import {
    FilterContainer,
    Fieldset,
    Legend,
    Input,
    OptionContainer,
    Label,
    OptionInfo,
    CheckBoxContainer,
} from "./EquipmentFilter.styled";

const EquipmentFilter = ({ equipment, selectOption }) => {
    
    return (
        <FilterContainer >
            Filters
            <Fieldset>
                <Legend>Vehicle equipment</Legend>
                <CheckBoxContainer>
                {equipment.map(label => (
                        <OptionContainer key={label.text}>
                         <Label htmlFor={label.name}>
                            <Input
                                onChange={selectOption}
                                type="checkbox"
                                name={label.name}
                                value={label.value}
                            />
                            <OptionInfo >
                                <svg width="32px" height="32px" fill="none" stroke="black">
                                    <use href={label.iconHref}></use>
                                </svg>
                                {label.text}
                            </OptionInfo >
                        </Label>
                        </OptionContainer>
                ))}      
                    </CheckBoxContainer>
            </Fieldset>  
        </FilterContainer >
    )

}

export default EquipmentFilter; 
