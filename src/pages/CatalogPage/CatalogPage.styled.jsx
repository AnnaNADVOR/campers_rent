import styled from '@emotion/styled';

export const CatalogSection = styled.section`
padding-top: 30px;
	padding-bottom: 30px;	
	@media screen and (min-width: 768px) {
	padding-top: 60px;
	padding-bottom: 60px;	
	}
	
`;
export const FilterPart = styled.div`
	@media screen and (min-width: 1440px) {
		display: flex;
		flex-direction: column;
		width: 30%;
	}
`;
export const AdvertsPart = styled.div`
	@media screen and (min-width: 1440px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 50px;
		width: 70%;
	}
`;
