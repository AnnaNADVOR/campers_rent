import FeaturesList from "components/FeaturesList/FeaturesList";
import sprite from "../../assets/icons/sprite.svg";
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
} from "./AdvertDetails.styled";
import FeaturesTab from "components/FeaturesTab/FeaturesTab";

const AdvertDetails = ({ advert }) => {
    console.log(advert)
    return (
        <div>
            <MainText>{advert.name}</MainText >
            <AdditionalInfo>
                <Rating>
                    <svg>
                        <use href={`${sprite}#star`}></use>
                    </svg>
                    <RatingValue>{advert.rating}({advert.reviews.length} Reviewers)</RatingValue>
                </Rating>
                <Location >
                    <svg>
                        <use href={`${sprite}#mapPin`}></use>
                    </svg>
                    <Address>
                        <a href={`https://www.google.com/maps/place/${advert.location}`} target="_blank" rel="noopener noreferrer" >{advert.location}</a>
                    </Address>
                </Location >
            </AdditionalInfo>
            <MainText>€ {advert.price.toFixed(2)}</MainText>
            <MainInfoContainer>
                <CamperGallery>
                <CamperImgContainer >
                    <CamperImg src={advert.gallery[0]} alt={advert.name} />                
                </CamperImgContainer >
                <CamperImgContainer >                
                    <CamperImg src={advert.gallery[1]} alt={advert.name} />                    
                </CamperImgContainer >
                <CamperImgContainer >                 
                    <CamperImg src={advert.gallery[2]} alt={advert.name} />                 
                </CamperImgContainer >
            </CamperGallery>
            <Description>{advert.description}</Description>
            {/* <FeaturesList advert={advert} />   */}
            <TabsList >
                <li>
                    <Tab>Features</Tab>
                </li>
                <li>
                    <Tab>Reviews</Tab>
                </li>              
                </TabsList>
              <FeaturesTab advert={ advert} />   
            </MainInfoContainer>  
           
        </div>
       
    )
}

export default AdvertDetails; 


