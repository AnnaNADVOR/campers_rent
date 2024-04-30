import { SecondaryBtn } from './SecondaryButton.styled';

const SecondaryButton = ({ text, type, onClick, loader }) => {
	return (
		<SecondaryBtn type={type} onClick={onClick}>
			{loader ? loader : text}
		</SecondaryBtn>
	);
};

export default SecondaryButton;
