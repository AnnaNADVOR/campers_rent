import sprite from "../../../assets/icons/sprite.svg";
import {
    FavoriteButton,
    RemoveIcon,
    FavoriteIcon,
} from "./AddToFavoriteButton.styled";

const AddToFavoriteButton = ({ onClick, isActive, location }) => {
    return (
        <FavoriteButton onClick={onClick}>
            {location.pathname === "/favorites" ?
                (
                    <RemoveIcon>
                        <use href={`${sprite}#trash`}></use>
                    </RemoveIcon> 
                ): (
                    <FavoriteIcon isActive={isActive}>
                        <use href={`${sprite}#heart`}></use>
                    </FavoriteIcon>
                )
            }
        </FavoriteButton>
    )     
}

export default AddToFavoriteButton; 
