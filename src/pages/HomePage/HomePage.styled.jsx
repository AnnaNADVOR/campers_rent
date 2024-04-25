import styled from '@emotion/styled';
import Img from '../../assets/icons/heroImage.jpg';

export const Hero = styled.section`
	width: 100%;
	padding-top: 100px;
	padding-bottom: 100px;
	background-image: linear-gradient(
			to right,
			rgba(47, 48, 58, 0.6),
			rgba(47, 48, 58, 0.5)
		),
		url(${Img});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding-top: 200px;
		padding-bottom: 200px;
	}
`;

export const HeroTitle = styled.h1`
	margin: 0 auto;
	font-size: 24px;
	line-height: 1.2;
	text-transform: uppercase;
	text-align: center;

	font-weight: 700;
	color: ${({ theme }) => theme.colors.milky};
	@media screen and (min-width: 768px) {
		font-size: 44px;
		font-weight: 900;
		max-width: 690px;
	}
`;

export const AdvantagesSection = styled.section`
	padding-top: 60px;
	padding-bottom: 60px;

	@media screen and (min-width: 768px) {
		padding-top: 94px;
		padding-bottom: 94px;
	}
`;

export const AdvantagesTitle = styled.h2`
	font-size: 26px;
	text-align: center;
	line-height: 24px;
	margin-bottom: 30px;

	color: ${({ theme }) => theme.colors.darkblue};
	@media screen and (min-width: 768px) {
		font-size: 36px;
		margin-bottom: 50px;
	}
`;

export const AdvantagesList = styled.ul`
	@media screen and (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
	}
`;

export const AdvantageItem = styled.li`
  font-size: 14px;
  
	&:not(:last-child) {
		margin-bottom: 30px;
	}
	
	@media screen and (min-width: 768px) {
		color: ${({ theme }) => theme.colors.gray};
		font-weight: 400;
		font-size: 16px;
		flex-basis: calc((100% - 90px) / 4);
	}
`;

export const AdvantageLable = styled.div`
	margin-bottom: 30px;
	display: flex;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	height: 120px;
	background-color: ${({ theme }) => theme.colors.lightGray};

	svg {
		width: 70px;
		height: 70px;
		fill: ${({ theme }) => theme.colors.darkblue};
	}
`;

export const AdvantageTitle = styled.h3`
	margin-bottom: 10px;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.darkblue};
	text-align: center;

	@media screen and (min-width: 768px) {
		font-size: 20px;
		text-align: start;
	}
`;
