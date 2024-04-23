import { MainBtn } from "./MainButton.styled";

const MainButton = ({ text, type, onClick, loader }) => {
    return (
        <MainBtn type={type} onClick={onClick}>
            {loader ? loader : text}
        </MainBtn>
    )
}

export default MainButton; 
