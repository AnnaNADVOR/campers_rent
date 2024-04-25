import styled from '@emotion/styled';

export const Header = styled.header`
	border-bottom: ${({ theme }) => theme.borders.secondaryBorder};
`;

export const HeaderContainer = styled.div`
	flex-direction: column;
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 5px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		padding-top: 0;
	}
`;
export const LogoIcon = styled.svg`
	fill: ${({ theme }) => theme.colors.accentOrange};
	width: 50px;
	height: 40px;
	margin-right: 8px;
`;

export const Logo = styled.a`
	display: flex;
	align-items: self-end;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.darkblue};

	span {
		color: ${({ theme }) => theme.colors.accentOrange};
	}
`;
