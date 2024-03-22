import styled from "@emotion/styled";

export const SecondaryBtn = styled.button`
    width: 166px;
    text-align: center;
    display: inline-block;
    border-radius: 200px;
    border: 1px solid rgba(71, 84, 103, 0.2);
    padding: 16px 40px;
    background-color: transparent; 
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.darkBlue};

    /* &:hover,
    &:focus {
        background-color:${({ theme }) => theme.colors.accentOrangeHover};
    } */
`