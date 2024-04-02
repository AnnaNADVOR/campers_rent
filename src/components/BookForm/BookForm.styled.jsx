import styled from "@emotion/styled";
import { Form, Field } from "formik";

export const BookingForm = styled(Form)`
    /* display: flex; */
    width: 53%;
    padding: 24px;
    border: ${({ theme }) => theme.borders.mainBorder};
    border-radius: 10px;    
`
export const FormTitle = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkblue};
    margin-bottom: 8px;
`
export const FormInfo = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px; 
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 24px;     
`
export const Input = styled(Field)`
    width: 100%;
    padding: 18px; 
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.milky};
    outline: transparent;
    font-size: 16px;
    line-height: 20px; 
    color: ${({ theme }) => theme.colors.formText};
    margin-bottom: 14px;
`
export const Textarea = styled(Field)`
    resize: none;
    height: 114px;
    width: 100%;
    padding: 18px; 
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.colors.milky};
    outline: transparent;
    font-size: 16px;
    line-height: 20px; 
    color: ${({ theme }) => theme.colors.formText};
    margin-bottom: 24px; 
`