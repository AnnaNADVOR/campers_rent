import Feature from "./Feature"
import sprite from "../../assets/icons/sprite.svg";
import capitalize from "services/capitalize";

const FeaturesList = ({ features }) => {
    const details = Object.entries(features.details);
    return (
        <ul>
            {features.children >0 && (<li>
                <svg>
                    <use href={`${sprite}#children`}></use>
                </svg>
                <p>{features.children} children</p>
            </li>)}
            <li>
                <svg>
                    <use href={`${sprite}#adults`}></use>
                </svg>
                <p>{features.adults} adults</p>  
            </li>
            <li>
                <svg fill="none" stroke="black">
                    <use href={`${sprite}#transmission`}></use>
                </svg>
                <p>{capitalize(features.transmission)}</p>  
            </li>
            <li>
                <svg>
                    <use href={`${sprite}#engine`}></use>
                </svg>
                <p>{capitalize(features.engine)}</p>  
            </li>
            {details.map(detail => (
                <li key={detail[0]}>
                    <Feature feature={detail} />
                </li>
            ))}
        </ul>
    )
}

export default FeaturesList