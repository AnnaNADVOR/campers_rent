import { MagnifyingGlass } from 'react-loader-spinner';

import { LoaderContainer } from './MainLoader.styled';

const MainLoader = () => {
    return (
        <LoaderContainer>
            <MagnifyingGlass
                glassColor='#F7F7F7'
                color='#E44848'
                height='100'
                width='100'
            />
            Wait a moment... 
        </LoaderContainer>
    )
}

export default MainLoader;