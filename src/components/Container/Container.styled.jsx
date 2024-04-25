import styled from '@emotion/styled';

export const MainContainer = styled.div`
	max-width: 480px;
	padding-left: 15px;
	padding-right: 15px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		max-width: 768px;
	}

	@media screen and (min-width: 1440px) {
		max-width: 1440px;
	}
`;
