import styled from '@emotion/styled';

export const NotificationContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	text-align: center;
`;

export const Message = styled.p`
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.darkblue};
	margin-bottom: 10px;

	@media screen and (min-width: 768px) {
		font-size: 20px;
	}
`;

export const Comment = styled.p`
	font-size: 14px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.formText};

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`;

export const NotificationIcon = styled.svg`
	width: 90px;
	height: 90px;
	fill: ${({ theme }) => theme.colors.formText};
`;
