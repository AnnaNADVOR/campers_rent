import styled from '@emotion/styled';

export const SelectContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-bottom: 15px;
`;
export const MenuContainer = styled.div`
	position: absolute;
	top: 50px;
	padding: 12px;
	background-color: ${({ theme }) => theme.colors.milky};
	border-radius: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	width: 250px;
`;

export const SelectButton = styled.button`
	display: inline-flex;
	text-align: center;
	justify-content: space-between;
	gap: 2px;
	background-color: ${({ theme }) => theme.colors.milky};
	min-width: 250px;
	padding: 12px;
	color: ${({ theme }) => theme.colors.darkblue};
	border-radius: 20px;
	font-family: inherit;
	font-size: 14px;

	svg {
		width: 15px;
		height: 15px;
		fill: ${({ theme }) => theme.colors.darkblue};
	}

    span {
        color: ${({ theme }) => theme.colors.gray};
    }

	@media screen and (min-width: 1440px) {
		font-size: 16px;

		svg {
			width: 20px;
			height: 20px;
		}
	}
`;

export const OptionsList = styled.ul`
	display: flex; 
	flex-direction: column;
	gap: 8px; 
`
export const SelectInput = styled.input`
    opacity: 0; 
    position: absolute;
    width: 100%;
    cursor: pointer;
`

export const SelectInputLabel = styled.label`
    display: flex;
    font-family: inherit;
	font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.colors.milky};
    

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.colors.lightGray};
        border-color: ${({ theme }) => theme.colors.primaryWhite};        
    }

    @media screen and (min-width: 1440px) {
		font-size: 16px;
    }    
`