import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const BookingForm = styled(Form)`
	width: 100%;
	padding: 14px;
	border: ${({ theme }) => theme.borders.mainBorder};
	border-radius: 10px;

	@media screen and (min-width: 768px) {
		width: 53%;
		padding: 24px;
	}
`;

export const FormTitle = styled.p`
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	text-align: center;
	color: ${({ theme }) => theme.colors.darkblue};
	margin-bottom: 8px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
		text-align: start;
	}
`;

export const FormInfo = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.gray};
	margin-bottom: 14px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
		margin-bottom: 24px;
	}
`;

export const Input = styled(Field)`
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: none;
	background-color: ${({ theme }) => theme.colors.milky};
	outline: transparent;
	font-size: 14px;
	line-height: 20px;
	color: ${({ theme }) => theme.colors.formText};
	margin-bottom: 14px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
		padding: 18px;
	}
`;

export const Textarea = styled(Field)`
	resize: none;
	height: 114px;
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: none;
	background-color: ${({ theme }) => theme.colors.milky};
	outline: transparent;
	font-size: 14px;
	line-height: 20px;
	color: ${({ theme }) => theme.colors.formText};
	margin-bottom: 24px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
		padding: 18px;
	}
`;

export const CalendarIcon = styled.svg`
	position: absolute;
	bottom: 50%;
	right: 18px;
	width: 15px;
	height: 15px;
	stroke: ${({ theme }) => theme.colors.darkblue};
	fill: none;

	@media screen and (min-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

export const CalendarWrapper = styled.div`
	position: relative;

	input {
		width: 100%;
		padding: 10px;
		border-radius: 10px;
		border: none;
		background-color: ${({ theme }) => theme.colors.milky};
		outline: transparent;
		font-size: 14px;
		line-height: 20px;
		color: ${({ theme }) => theme.colors.formText};
		margin-bottom: 14px;
	}

	@media screen and (min-width: 768px) {
		input {
			font-size: 16px;
			padding: 18px;
		}
	}
`;

export const ErrorMassage = styled.p`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.accentOrange};
`;
