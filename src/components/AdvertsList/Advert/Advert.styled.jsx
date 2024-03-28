import styled from "@emotion/styled";

export const AdvertCard = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px;
    width: 888px;
    height: 358px;
    gap: 24px; 
    border: 1px solid rgba(16, 24, 40, 0.2);
    border-radius: 20px;  
    font-weight: 400;
    font-size: 16px;
    line-height: 24px; 
`

export const CamperImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;    
    display: block;
`

export const CamperImgContainer = styled.div`
    width: 290px;
    height: 310px;    
`

export const CamperInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 526px;
`

export const Title = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 30px; 
    color:${({ theme }) => theme.colors.darkblue};   
`

// export const AddToFavoriteBtn = styled.button`
//     width: 24px; 
//     height: 24px; 
//     border: none;
//     background-color: transparent; 

//     svg {
//         width: 24px; 
//         height: 24px;
//         fill: none; 
//         stroke:${({ theme }) => theme.colors.darkblue}; 
//     }
// `

export const MainInfo = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    align-items: center; 
    justify-content: space-between; 
    margin-bottom: 8px;   
`

export const InfoContainer = styled.div`
    display: flex; 
    align-items: center;
    gap: 10px;
`

export const AdditionalInfo = styled.div`
    display: inline-flex; 
    gap: 16px; 
    margin-bottom: 24px;
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

export const Description = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin-bottom: 24px;
`

export const DetailsList = styled.ul`
    display: flex;
    flex-wrap: wrap; 
    gap: 8px;
    margin-bottom: 24px;    
`

export const DetailItem = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
    gap: 8px;
    min-width: 87px;    
    border-radius: 100px;
    padding: 12px 18px;
    background-color:${({ theme }) => theme.colors.lightGray}; 
    font-weight: 500;
    font-size: 16px;
    line-height: 20px; 
    text-align: center;    

    svg {
        width: 20px;
        height: 20px;
    }
`

