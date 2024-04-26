import styled from '@emotion/styled';

export const MainContainer = styled.div`
	max-width: 480px;
	padding-left: 15px;
	padding-right: 15px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		max-width: 768px;
		padding-left: 30px;
		padding-right: 30px;
	}

	@media screen and (min-width: 1440px) {
		max-width: 1440px;
		padding-left: 64px;
		padding-right: 64px;
	}
`;
