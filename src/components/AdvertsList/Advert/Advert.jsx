// import FeaturesList from "components/FeaturesList/FeaturesList";
import { useSelector, useDispatch } from "react-redux";
import sprite from "../../../assets/icons/sprite.svg";
import capitalize from "services/capitalize";
import MainButton from "components/Buttons/MainButton/MainButton";
import { addToFavorites }  from "../../../redux/adverts/slice"; 

import {
    AdvertCard,
    CamperImg,
    CamperImgContainer,
    CamperInfoContainer,
    Title,
    AddToFavoriteBtn,
    MainInfo,
    InfoContainer,
    AdditionalInfo,
    Rating,
    RatingValue,
    Location,
    Address,
    Description,
    DetailsList,
    DetailItem,    
} from "./Advert.styled"; 

const Advert = ({ advert }) => {
    const dispatch = useDispatch();
    const onFavoriteClick = () => {
        dispatch(addToFavorites(advert))
    }

    return (
        <AdvertCard>
            <CamperImgContainer>
                <CamperImg alt={advert.name} src={advert.gallery[0]} />   
            </CamperImgContainer>
            <CamperInfoContainer>
             
            <MainInfo>
                <Title>{advert.name}</Title>
                <InfoContainer>
                    <Title>€ {advert.price.toFixed(2)}</Title>
                    <AddToFavoriteBtn onClick={onFavoriteClick}>
                        <svg>
                            <use href={`${sprite}#heart`}></use>
                        </svg>
                    </AddToFavoriteBtn>  
                </InfoContainer>
            </MainInfo>

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

            <Description>{advert.description}</Description>

            <DetailsList>
                {advert.children > 0 && (
                    <li>
                        <DetailItem>
                           <svg>
                                <use href={`${sprite}#children`}></use>
                            </svg>
                            <p>{advert.children} children</p> 
                        </DetailItem>                        
                    </li>
                )}
                <li>
                    <DetailItem>
                        <svg>
                            <use href={`${sprite}#adults`}></use>
                        </svg>
                        <p>{advert.adults} adults</p>  
                    </DetailItem> 
                </li>
                <li>
                    <DetailItem>
                        <svg fill="none" stroke="black">
                            <use href={`${sprite}#transmission`}></use>
                        </svg>
                        <p>{capitalize(advert.transmission)}</p>   
                    </DetailItem>
                </li>
                <li>
                    <DetailItem>
                        <svg>
                            <use href={`${sprite}#engine`}></use>
                        </svg>
                        <p>{capitalize(advert.engine)}</p>    
                    </DetailItem>
                </li>
                {advert.details.kitchen >= 1 && (                    
                    <li>
                        <DetailItem>
                            <svg fill="none" stroke="black">
                                <use href={`${sprite}#kitchen`}></use>
                            </svg>
                            <p>Kitchen</p>  
                        </DetailItem>
                    </li>
                )}                
                <li>
                    <DetailItem>
                        <svg fill="none" stroke="black">
                            <use href={`${sprite}#beds`}></use>
                        </svg>
                        <p>{advert.details.beds} beds</p>  
                    </DetailItem>                   
                </li>
                {advert.details.airConditioner >= 1 && (
                    <li>
                        <DetailItem>
                            <svg>
                                <use href={`${sprite}#AC`}></use>
                            </svg>
                            <p>AC</p>
                        </DetailItem>
                    </li>
                )}       
            </DetailsList>
            <MainButton text="Show more" type="button"/>
            </CamperInfoContainer>  
            {/* <FeaturesList features={advert} /> */}
        </AdvertCard>
    )
}

export default Advert; 