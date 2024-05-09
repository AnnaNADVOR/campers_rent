import styled from '@emotion/styled';

export const LocationLabel = styled.label`
	position: relative;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.formText};
	display: flex;
	flex-direction: column;
	gap: 8px;

	.react-dropdown-select {
		border-radius: 10px;
		padding: 18px 18px 18px 44px;
		width: 100%;
		border: none;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: ${({ theme }) => theme.colors.accentOrange};
		background-color: ${({ theme }) => theme.colors.milky};

		&:focus-within {
			box-shadow: 0px 0px 4px rgba(16, 24, 40, 0.6);
		}

		svg {
			display: none;
		}
	}

	.react-dropdown-select-dropdown {
		border-radius: 10px;
		box-shadow: 0px 0px 4px rgba(16, 24, 40, 0.6);
		background-color: ${({ theme }) => theme.colors.milky};
	}

	.react-dropdown-select-item {
		color: ${({ theme }) => theme.colors.darkblue};

		&:hover,
		&:focus {
			background: ${({ theme }) => theme.colors.lightGray};
		}
	}

	.react-dropdown-select-item.react-dropdown-select-item-selected,
	.react-dropdown-select-item.react-dropdown-select-item-active {
		color: ${({ theme }) => theme.colors.accentOrange};
		background: transparent;
	}

	.react-dropdown-select-clear {
		color: ${({ theme }) => theme.colors.formText};
		transition: color ${({ theme }) => theme.transition};

		&:hover,
		&:focus {
			color: ${({ theme }) => theme.colors.accentOrange};
		}
	}
`;

export const LocationIcon = styled.svg`
	position: absolute;
	top: 52%;
	left: 18px;
	width: 18px;
	height: 20px;
	fill: none;
	stroke: ${({ theme }) => theme.colors.darkblue};
`;
