import styled from '@emotion/styled';

export const FavoritesSection = styled.section`
	padding-top: 30px;
	padding-bottom: 30px;

	@media screen and (min-width: 1440px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
   
`;

export const DefaultInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 75vh;

	p{
		margin-top: auto;
		margin-bottom: auto;
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: ${({ theme }) => theme.colors.gray};
	}
`;
