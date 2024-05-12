import styled from '@emotion/styled';

export const SecondaryBtn = styled.button`
	width: 120px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	border-radius: 200px;
	border: ${({ theme }) => theme.borders.secondaryButtonBorder};
	padding: 12px 20px;
	background-color: transparent;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: -0.01em;
	color: ${({ theme }) => theme.colors.darkBlue};
    transition: border ${({ theme }) => theme.transition};

	&:hover,
	&:focus {
		border: ${({ theme }) => theme.borders.accenLighttBorder};
	}

	@media screen and (min-width: 768px) {
        width: 166px;
        font-size: 16px;
        padding: 16px 40px;
    }
`;
