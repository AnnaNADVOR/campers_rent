import styled from "@emotion/styled";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(137, 137, 137, 0.2);
    z-index: 1200;  
`

export const ModalContainer = styled.div`
    position: absolute;
    height: 95vh;
    width: 982px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    background-color: white;
    border-radius: 20px;
    padding: 40px;
`
export const CloseButton = styled.button`
   position: absolute;
   width:32px;
   height: 32px;
   top: 14px;
   right: 14px;
   background-color: transparent;
   border: none;
   display: flex;
   justify-content: center;
   align-items: center;

`
export const CloseIcon = styled.svg`
    fill: currentColor;
    stroke: ${({ theme }) => theme.colors.darkblue};
    width: 18px;
    height: 18px;
    transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

