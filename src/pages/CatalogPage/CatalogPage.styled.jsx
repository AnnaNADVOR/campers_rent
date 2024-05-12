import styled from '@emotion/styled';

export const CatalogSection = styled.section`
	padding-top: 30px;
	padding-bottom: 30px;

	@media screen and (min-width: 1440px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

export const CatalogContainer = styled.div`
	display: flex;
	flex-direction: column;

	ul {
		margin-bottom: 20px;
	}

	@media screen and (min-width: 1440px) {
		flex-direction: row;
		gap: 64px;

		ul {
			margin-bottom: 50px;
		}
	}
`;
export const FilterPart = styled.div`
	margin-bottom: 20px;

	@media screen and (min-width: 1440px) {
		display: flex;
		flex-direction: column;
		width: 30%;
	}
`;

export const AdvertsPart = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 1440px) {
		width: 70%;
	}
`;
