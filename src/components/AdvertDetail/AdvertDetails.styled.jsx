import styled from "@emotion/styled";

export const MainText = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 30px; 
    color:${({ theme }) => theme.colors.darkblue};   
`

export const AdditionalInfo = styled.div`
    display: inline-flex; 
    gap: 16px; 
    margin-bottom: 16px;
    margin-top: 10px;
`

export const Rating = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    gap: 4px; 

    svg {
        width: 16px;
        height: 16px;
    }    
`

export const RatingValue = styled.p`
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.darkblue};
`

export const Location = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    gap: 4px;    

    svg {
        width: 16px;
        height: 16px;
        fill: none; 
        stroke:${({ theme }) => theme.colors.darkblue}; 
    }   
`
export const Address = styled.address`
    font-style: normal;
`

export const CamperImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border:2px solid green;
    object-fit: cover;    
    display: block;
`

export const CamperImgContainer = styled.li`
    width: 290px;
    height: 310px;   
    border-radius: 10px; 
    display: block;
    border:2px solid red;
`
export const CamperGallery = styled.ul`
    display: flex; 
    justify-content: space-between;

`