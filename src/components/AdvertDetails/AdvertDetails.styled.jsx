import styled from '@emotion/styled';

export const MainText = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 30px;
	color: ${({ theme }) => theme.colors.darkblue};

	@media screen and (min-width: 768px) {
		font-size: 24px;
	}
`;

export const AdditionalInfo = styled.div`
	display: inline-flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 16px;
	margin-top: 10px;
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.darkblue};

	@media screen and (min-width: 768px) {
		gap: 16px;
		flex-direction: row;
		font-size: 16px;
	}
`;

export const Rating = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 4px;

	svg {
		width: 16px;
		height: 16px;
	}

	@media screen and (min-width: 768px) {
		justify-content: center;
	}
`;

export const RatingValue = styled.p`
	color: ${({ theme }) => theme.colors.darkblue};
`;

export const Location = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 4px;

	svg {
		width: 16px;
		height: 16px;
		fill: none;
		stroke: ${({ theme }) => theme.colors.darkblue};
	}

	@media screen and (min-width: 768px) {
		justify-content: center;
	}
`;

export const Address = styled.address`
	font-style: normal;
	text-decoration: underline;
`;

export const CamperImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 10px;
	object-fit: cover;
	display: block;
`;

export const CamperImgContainer = styled.li`
	width: 100%;
	border-radius: 10px;

	@media screen and (min-width: 768px) {
		width: calc(100% / 3);
		height: 310px;

		display: block;
	}
`;

export const CamperGallery = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-bottom: 14px;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		gap: 16px;
		margin-bottom: 24px;
	}
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.gray};
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
		margin-bottom: 44px;
	}
`;

export const MainInfoContainer = styled.div`
	overflow-y: auto;
	max-height: calc(100vh - 270px);
	margin-top: 24px;
	padding-right: 16px;
`;

export const TabsList = styled.ul`
	display: flex;
	gap: 40px;
	border-bottom: ${({ theme }) => theme.borders.mainBorder};
	margin-bottom: 44px;
`;

export const Tab = styled.button`
	border: none;
	background-color: transparent;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	padding-bottom: 14px;
	color: ${({ theme }) => theme.colors.darkblue};
	position: relative;

	&.active::after {
		position: absolute;
		top: 36px;
		display: block;
		content: '';
		width: 100%;
		height: 3px;
		background-color: ${({ theme }) => theme.colors.accentOrange};
		border-radius: 2px;
	}

	@media screen and (min-width: 768px) {
		font-size: 20px;
		padding-bottom: 24px;
		&.active::after {
			top: 46px;
		}
	}
`;

export const TabContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 14px;


	@media screen and (min-width: 768px) {
		justify-content: space-between;
		flex-direction: row;
		gap: 24px;
	}
`;
