import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import {
  MainText,
  AdditionalInfo,
  Rating,
  RatingValue,
  Location,
  Address,
  CamperImgContainer,
  CamperImg,
  CamperGallery,
  Description,
  MainInfoContainer,
  TabsList,
  Tab,
  TabContainer,
} from './AdvertDetails.styled';
import FeaturesTab from 'components/FeaturesTab/FeaturesTab';
import ReviewsTab from 'components/ReviewsTab/ReviewsTab';
import BookForm from 'components/BookForm/BookForm';

const AdvertDetails = ({ advert }) => {
  const [activeTab, setActiveTab] = useState('features');
  const handleTabClick = event => {
    setActiveTab(event.target.ariaLabel);
  };
  return (
    <div>
      <MainText>{advert.name}</MainText>
      <AdditionalInfo>
        <Rating>
          <svg>
            <use href={`${sprite}#star`}></use>
          </svg>
          <RatingValue>
            {advert.rating}({advert.reviews.length} Reviewers)
          </RatingValue>
        </Rating>
        <Location>
          <svg>
            <use href={`${sprite}#mapPin`}></use>
          </svg>
          <Address>
            <a
              href={`https://www.google.com/maps/place/${advert.location}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {advert.location}
            </a>
          </Address>
        </Location>
      </AdditionalInfo>
      <MainText>€ {advert.price.toFixed(2)}</MainText>
      <MainInfoContainer>
        <CamperGallery>
          <CamperImgContainer>
            <CamperImg src={advert.gallery[0]} alt={advert.name} />
          </CamperImgContainer>
          <CamperImgContainer>
            <CamperImg src={advert.gallery[1]} alt={advert.name} />
          </CamperImgContainer>
          <CamperImgContainer>
            <CamperImg src={advert.gallery[2]} alt={advert.name} />
          </CamperImgContainer>
        </CamperGallery>
        <Description>{advert.description}</Description>
        <TabsList>
          <li>
            <Tab
              type="button"
              aria-label="features"
              onClick={handleTabClick}
              className={activeTab === 'features' ? 'active' : ''}
            >
              Features
            </Tab>
          </li>
          <li>
            <Tab
              type="button"
              aria-label="reviews"
              onClick={handleTabClick}
              className={activeTab === 'reviews' ? 'active' : ''}
            >
              Reviews
            </Tab>
          </li>
        </TabsList>
        <TabContainer>
          {activeTab === 'features' && <FeaturesTab advert={advert} />}
          {activeTab === 'reviews' && <ReviewsTab reviews={advert.reviews} />}
          <BookForm advertId={advert._id} />
        </TabContainer>
      </MainInfoContainer>
    </div>
  );
};

export default AdvertDetails;
