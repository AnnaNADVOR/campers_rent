import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: ${({ theme }) => theme.colors.darkblue};
	margin-top: auto;
	margin-bottom: auto;
`;
