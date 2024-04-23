import { ThreeDots } from 'react-loader-spinner';

const ButtonLoader = ({color}) => {
    return <ThreeDots
        color={color}
        radius="10"
        width="40"
        height="20"
    />;
};

export default ButtonLoader;
