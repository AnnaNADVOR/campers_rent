import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import sprite from "../../../assets/icons/sprite.svg";
import capitalize from "services/capitalize";
import MainButton from "components/Buttons/MainButton/MainButton";
import { addToFavorites, removeFromFavorites }  from "../../../redux/adverts/slice"; 
import { selectFavorites } from "../../../redux/adverts/selectors";

import {
    AdvertCard,
    CamperImg,
    CamperImgContainer,
    CamperInfoContainer,
    Title,   
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
import AddToFavoriteButton from "components/Buttons/AddToFavoriteButton/AddToFavoriteButton";
import Modal from "components/Modal/Modal";
import AdvertDetails from "components/AdvertDetail/AdvertDetails";

const Advert = ({ advert }) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
    const location = useLocation();
    const favoritesAdverts = useSelector(selectFavorites); 
    const isAdvertFavorite = favoritesAdverts.find(favoriteAdvert => favoriteAdvert._id === advert._id);

    const dispatch = useDispatch();
    const onFavoriteClick = () => {
        if (isAdvertFavorite) {            
            dispatch (removeFromFavorites(advert))
        } else {
          dispatch(addToFavorites(advert));     
        }             
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
                        <AddToFavoriteButton onClick={onFavoriteClick} isActive={isAdvertFavorite} location={location} />                 
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
                    // <li>
                        <DetailItem>
                           <svg>
                                <use href={`${sprite}#children`}></use>
                            </svg>
                            {advert.children} children  
                        </DetailItem>                        
                    // </li>
                )}
                {/* <li> */}
                    <DetailItem>
                        <svg>
                            <use href={`${sprite}#adults`}></use>
                        </svg>
                        {advert.adults} adults
                    </DetailItem> 
                {/* </li> */}
                {/* <li> */}
                    <DetailItem>
                        <svg fill="none" stroke="black">
                            <use href={`${sprite}#transmission`}></use>
                        </svg>
                        {capitalize(advert.transmission)}  
                    </DetailItem>
                {/* </li> */}
                {/* <li> */}
                    <DetailItem>
                        <svg>
                            <use href={`${sprite}#engine`}></use>
                        </svg>
                        {capitalize(advert.engine)}   
                    </DetailItem>
                {/* </li> */}
                {advert.details.kitchen >= 1 && (                    
                    // <li>
                        <DetailItem>
                            <svg fill="none" stroke="black">
                                <use href={`${sprite}#kitchen`}></use>
                            </svg>
                            Kitchen
                        </DetailItem>
                    // </li>
                )}                
                {/* <li> */}
                    <DetailItem>
                        <svg fill="none" stroke="black">
                            <use href={`${sprite}#beds`}></use>
                        </svg>
                        {advert.details.beds} beds
                    </DetailItem>                   
                {/* </li> */}
                {advert.details.airConditioner >= 1 && (
                    // <li>
                        <DetailItem>
                            <svg>
                                <use href={`${sprite}#AC`}></use>
                            </svg>
                            AC
                        </DetailItem>
                    // </li>
                )}       
            </DetailsList>
            <MainButton text="Show more" type="button" onClick={toggleModal}/>
            </CamperInfoContainer>  
            {showModal && (
                <Modal closeModal={toggleModal}>
                    <AdvertDetails advert={advert} />
                </Modal>
            )}            
        </AdvertCard>
    )
}

export default Advert; 