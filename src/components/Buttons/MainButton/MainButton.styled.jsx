import styled from "@emotion/styled";

export const MainBtn = styled.button`
    width: 166px;
    text-align: center;
    display: inline-block;
    border-radius: 200px;
    padding: 16px 40px;
    background-color:${({ theme }) => theme.colors.accentOrange};
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.primaryWhite};

    &:hover,
    &:focus {
        background-color:${({ theme }) => theme.colors.accentOrangeHover};
    }
`