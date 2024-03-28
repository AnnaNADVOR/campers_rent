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
    object-fit: cover;    
    display: block;
   
`

export const CamperImgContainer = styled.li`
    width: 290px;
    height: 310px;   
    border-radius: 10px; 
    display: block;
`

export const CamperGallery = styled.ul`
    display: flex; 
    gap: 16px;
     margin-bottom: 24px; 
`

export const Description = styled.p`
margin-bottom: 44px;
   
    
`
export const MainInfoContainer = styled.div`
    overflow-y: auto;
    /* max-height: calc(100%-500px); */
    /* min-height: 300px;  */
    max-height: 520px;
    margin-top: 24px;
    padding-right: 16px; 
    
`
export const TabsList = styled.ul`
    display: flex; 
    gap: 40px; 
    margin-bottom: 44px; 
`

export const Tab = styled.button`
border: none; 
background-color: transparent; 
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: ${({ theme }) => theme.colors.darkblue}; 
`