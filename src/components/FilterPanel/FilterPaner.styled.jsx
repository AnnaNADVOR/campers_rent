import styled from '@emotion/styled';

export const FilterPanelContainer = styled.div`
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		margin-bottom: 64px;
	}
`;

export const FilterEquipmentContainer = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.gray};
	margin-top: 32px;
`;

export const FilterFormContainer = styled.div`
	margin-top: 22px;

	svg {
		width: 30px;
		height: 19px;
		fill: ${({ theme }) => theme.colors.darkblue};
		stroke: none;
	}

	@media screen and (min-width: 768px) {
		margin-top: 32px;

		svg {
			width: 40px;
			height: 29px;
		}
	}
`;

export const ButtonsList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;

	@media screen and (min-width: 768px) {
		gap: 20px;
	}
`;
