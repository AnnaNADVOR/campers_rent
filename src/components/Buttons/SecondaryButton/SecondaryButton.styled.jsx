import styled from '@emotion/styled';

export const SecondaryBtn = styled.button`
	width: 166px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 200px;
	border: ${({ theme }) => theme.borders.secondaryButtonBorder};
	padding: 16px 40px;
	background-color: transparent;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.01em;
	color: ${({ theme }) => theme.colors.darkBlue};
    transition: border ${({ theme }) => theme.transition};

	&:hover,
	&:focus {
		border: ${({ theme }) => theme.borders.accenLighttBorder};
	}
`;
