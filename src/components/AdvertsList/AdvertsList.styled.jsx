import styled from '@emotion/styled';

export const List = styled.ul`
	display: flex;
	flex-direction: column; 
	gap: 32px;
	width: 100%; 

	@media screen and (min-width: 768px) { 
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const AdvertItem = styled.li`
	flex-direction: column;
	align-items: center;
	display: flex;
	padding: 14px;
	width: 100%;
	gap: 24px;
	border: 1px solid rgba(16, 24, 40, 0.2);
	border-radius: 20px;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;

	@media screen and (min-width: 768px) {
		
		flex-direction: row;
		padding: 24px;
	}
`;
