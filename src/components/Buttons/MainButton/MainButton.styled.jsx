import styled from "@emotion/styled";

export const MainBtn = styled.button`
    width: 120px;
    text-align: center;
    display: flex;
    align-items: center; 
    justify-content: center;
    border-radius: 200px;
    padding: 12px 20px;
    background-color:${({ theme }) => theme.colors.accentOrange};
    font-weight: 500;
    font-size: 14px;
    line-height: 24px; 
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.primaryWhite};

    &:hover,
    &:focus {
        background-color:${({ theme }) => theme.colors.accentOrangeHover};
    }

    @media screen and (min-width: 768px) {
        width: 166px;
        font-size: 16px;
        padding: 16px 40px;
    }
`