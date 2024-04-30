import styled from "@emotion/styled";

export const FavoriteButton = styled.button`
    width: 24px; 
    height: 24px; 
    border: none;
    background-color: transparent; 
`

export const RemoveIcon = styled.svg`
    width: 24px; 
    height: 24px;
    fill: none; 
    stroke: ${({theme})=> theme.colors.accentOrange};
`

export const FavoriteIcon = styled.svg`
    width: 24px; 
    height: 24px;
    fill: ${({ isActive, theme }) => isActive ? theme.colors.accentOrange : "none"}; 
    stroke:${({ isActive, theme }) => isActive ? theme.colors.accentOrange : theme.colors.darkblue};     
`