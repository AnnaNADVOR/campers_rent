import styled from "@emotion/styled";

export const Title = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px; 
    color: ${({ theme }) => theme.colors.darkblue};
    margin-bottom: 24px;
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px; 
    color: ${({ theme }) => theme.colors.darkblue};
    gap:14px;
    padding-top: 24px;
    border-top: ${({ theme }) => theme.borders.mainBorder};
`
export const Item = styled.li`
    display: flex; 
    justify-content: space-between;
`