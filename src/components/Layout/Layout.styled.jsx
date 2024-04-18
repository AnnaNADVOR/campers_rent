import styled from '@emotion/styled';

export const Header = styled.header`
	border-bottom: ${({ theme }) => theme.borders.secondaryBorder};
`;

export const Container = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 1440px) {
		max-width: 1440px;
	}
`;

export const HeaderContainer = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;

    @media screen and (min-width: 1440px) {
		max-width: 1440px;
	}
`;

export const Section = styled.section`
	padding-bottom: 60px;
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
