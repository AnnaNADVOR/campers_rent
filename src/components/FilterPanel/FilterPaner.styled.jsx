import styled from '@emotion/styled';

export const FilterPanelContainer = styled.div`
    margin-bottom: 64px; 
`

export const FilterEquipmentContainer = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 32px;
`;

export const FilterFormContainer = styled.div`
    margin-top: 32px;
        
    svg {
        width: 40px; 
        height: 29px; 
        fill: ${({ theme }) => theme.colors.darkblue}; 
        stroke: none; 
    }
`