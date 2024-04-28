import styled from '@emotion/styled';

export const Fieldset = styled.fieldset`
	border: none;
	margin-top: 14px;
`;

export const Legend = styled.legend`
	font-weight: 600;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.darkblue};
	margin-bottom: 14px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
		margin-bottom: 24px;
	}
`;

export const InputsList = styled.ul `
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	padding-top: 14px;
	border-top: ${({ theme }) => theme.borders.secondaryBorder};

	@media screen and (min-width: 768px) {
		padding-top: 24px;
		gap: 10px;
	}
`;

export const Input = styled.input`
	opacity: 0;
	position: absolute;
	cursor: pointer;
	width: 85px;
	height: 75px;
	transition: border ${({ theme }) => theme.transition};

	&:checked + div {
		border: ${({ theme }) => theme.borders.accenLighttBorder};
	}

	@media screen and (min-width: 768px) {
		width: 112px;
		height: 95px;
	}
`;

export const OptionContainer = styled.li`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85px;
	height: 75px;

	@media screen and (min-width: 768px) {
		width: 112px;
		height: 95px;
	}
`;

export const Label = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const OptionInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 3px;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	width: 85px;
	height: 75px;
	border-radius: 10px;
	border: ${({ theme }) => theme.borders.mainBorder};

	@media screen and (min-width: 768px) {
		width: 112px;
		height: 95px;
		font-size: 16px;
		gap: 8px;
	}
`;

export const OptionIcon = styled.svg`
	width: 19px;
	height: 19px;
	fill: none;
	stroke: ${({ theme }) => theme.colors.darkblue};

	@media screen and (min-width: 768px) {
		width: 32px;
		height: 32px;
	}
`;
