import Feature from "./Feature"
import sprite from "../../assets/icons/sprite.svg";
import capitalize from "services/capitalize";
import {DetailsList, DetailItem } from "../AdvertsList/Advert/Advert.styled"

const FeaturesList = ({ advert }) => {
    const details = Object.entries(advert.details);
    
    return (      
        <DetailsList>
            {advert.children > 0 &&
                (<li>
                    <DetailItem>
                        <svg>
                            <use href={`${sprite}#children`}></use>
                        </svg>
                        <p>{advert.children} children</p>
                    </DetailItem> 
                </li>)
            }
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
            {details.map(detail => (
                !!detail[1] && (
                    <li key={detail[0]}>
                        <DetailItem >
                            <Feature feature={detail} />
                        </DetailItem>
                    </li>)
                ))
            }                                
        </DetailsList>      
    )
}

export default FeaturesList