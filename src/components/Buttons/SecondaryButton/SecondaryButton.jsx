import { SecondaryBtn } from "./SecondaryButton.styled";


const SecondaryButton = ({ text, type, onClick }) => {
    return (
        <SecondaryBtn type={type} onClick={onClick}>
            {text}
        </SecondaryBtn>
    )
}

export default SecondaryButton; 
