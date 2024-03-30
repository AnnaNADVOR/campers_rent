import styled from "@emotion/styled";

export const TabContainer = styled.div`
    width: 430px;    
`

export const ReviewsItem = styled.li`
    &:not(:last-child){
        margin-bottom: 24px;
    }
`

export const ReviewerContainer = styled.div`
    display: inline-flex; 
    align-items: center;
    gap:16px;
    margin-bottom: 16px;    
`

export const NameLabel = styled.span`
    display: flex;
    border-radius: 60px;
    width: 60px;
    height: 60px;
    padding: 15px 21px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    text-align: center; 
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color:${({ theme }) => theme.colors.accentOrange};   
`

export const ReviewerName = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px; 
    color: ${({ theme }) => theme.colors.darkblue};    
`

export const RatingList = styled.ul`
    display: inline-flex;
    justify-content: center;
    align-items: center; 
    gap: 4px;    
`
