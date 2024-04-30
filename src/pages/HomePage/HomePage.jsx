import { Helmet, HelmetProvider } from 'react-helmet-async';

import Container from '../../components/Container/Container';
import sprite from '../../assets/icons/sprite.svg';

import {
	Hero,
	HeroTitle,
	AdvantagesSection,
	AdvantagesTitle,
	AdvantagesList,
	AdvantageItem,
	AdvantageLable,
	AdvantageTitle,
} from './HomePage.styled';

const HomePage = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<Hero>
				<Container>
					<HeroTitle>The best solutions for your travels</HeroTitle>
				</Container>
			</Hero>
			<AdvantagesSection>
				<Container>
					<AdvantagesTitle>Our advantages</AdvantagesTitle>
					<AdvantagesList>
						<AdvantageItem>
							<AdvantageLable>
								<svg>
									<use href={`${sprite}#easy`}></use>
								</svg>
							</AdvantageLable>
							<AdvantageTitle>Easy</AdvantageTitle>
							<p>Well-thought-out search system.</p>
						</AdvantageItem>
						<AdvantageItem>
							<AdvantageLable>
								<svg>
									<use href={`${sprite}#speed`}></use>
								</svg>
							</AdvantageLable>
							<AdvantageTitle>Speed</AdvantageTitle>
							<p>We will contact you within an hour.</p>
						</AdvantageItem>
						<AdvantageItem>
							<AdvantageLable>
								<svg>
									<use href={`${sprite}#reliability`}></use>
								</svg>
							</AdvantageLable>
							<AdvantageTitle>Reliability</AdvantageTitle>
							<p>Only verified ads.</p>
						</AdvantageItem>
						<AdvantageItem>
							<AdvantageLable>
								<svg>
									<use href={`${sprite}#comfort`}></use>
								</svg>
							</AdvantageLable>
							<AdvantageTitle>Comfort</AdvantageTitle>
							<p>Well-kept campers with amenities.</p>
						</AdvantageItem>
					</AdvantagesList>
				</Container>
			</AdvantagesSection>
		</HelmetProvider>
	);
};

export default HomePage;
