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

@media screen and (min-width: 1440px) { 
	display: flex;
	gap: 64px;
}
`
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
	/* gap: 20px; */
	/* align-items: center; */

	@media screen and (min-width: 1440px) {			
		/* gap: 50px; */
		width: 70%;
	}
`;
