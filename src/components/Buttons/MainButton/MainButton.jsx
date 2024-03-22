import { MainBtn } from "./MainButton.styled";

const MainButton = ({ text, type }) => {
    return (
        <MainBtn type={type}>
            {text}
        </MainBtn>
    )
}

export default MainButton; 
