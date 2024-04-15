import styled from "@emotion/styled";

export const FilterContainer = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
    color: ${({ theme }) => theme.colors.gray};
    margin-top: 32px; 
`

export const Fieldset = styled.fieldset`
border: none; 
margin-top: 14px;    
/* display:flex;
flex-wrap: wrap;
gap:10px; */
`
export const Legend = styled.legend`
    font-weight: 600;
    font-size: 20px;


color: ${({ theme }) => theme.colors.darkblue};
margin-bottom: 24px; 

`

export const CheckBoxContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap:10px; 
padding-top: 24px; 
border-top: ${({ theme }) => theme.borders.secondaryBorder};

`
export const Input = styled.input`
   opacity:0;
    position: absolute; 
    cursor: pointer;
    width: 112px;
height: 95px; 


&:checked + div {
border: ${({ theme }) => theme.borders.accentFilterBorder};
}


`

export const OptionContainer = styled.div`
position: relative; 
    /* border: ${({ theme }) => theme.borders.mainBorder}; */
/* border-radius: 10px; */
/* padding: 17px 18px;
width: 112px;
height: 95px; */
display: flex;
justify-content: center; 
align-items: center; 
position: relative;

/* &+input:checked {
border: 2px solid red; 
} */

`
export const Label = styled.label`
  display: flex; 
  justify-content: center; 
  align-items: center;  
`

export const OptionInfo = styled.div`
    display: flex;   
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    gap: 8px;
    padding: 17px 18px;
width: 112px;
height: 95px;
border-radius: 10px;
 border: ${({ theme }) => theme.borders.mainBorder};
 
`