import styled from '@emotion/styled';

export const TabContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media screen and (min-width: 768px) {
		gap: 44px;
		width: 47%;
	}
`;
