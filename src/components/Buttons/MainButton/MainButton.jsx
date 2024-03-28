import { MainBtn } from "./MainButton.styled";

const MainButton = ({ text, type, onClick }) => {
    return (
        <MainBtn type={type} onClick={onClick}>
            {text}
        </MainBtn>
    )
}

export default MainButton; 
