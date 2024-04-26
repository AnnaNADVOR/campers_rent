import styled from '@emotion/styled';

export const Title = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.darkblue};
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
		margin-bottom: 24px;
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	color: ${({ theme }) => theme.colors.darkblue};
	gap: 14px;
	padding-top: 24px;
	border-top: ${({ theme }) => theme.borders.secondaryBorder};

    @media screen and (min-width: 768px) {
		font-size: 18px;
        padding-top: 24px;		
	}

`;

export const Item = styled.li`
	display: flex;
	justify-content: space-between;
`;
