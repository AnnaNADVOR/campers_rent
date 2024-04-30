import styled from "@emotion/styled";

export const List = styled.ul`
    display: flex; 
    flex-wrap: wrap;
    gap: 3px;

    @media screen and (min-width:768px) { 
         gap: 8px;
    }
`