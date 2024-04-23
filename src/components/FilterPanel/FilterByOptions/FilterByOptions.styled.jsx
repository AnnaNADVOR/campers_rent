import styled from '@emotion/styled';

export const Fieldset = styled.fieldset`
  border: none;
  margin-top: 14px;
`;

export const Legend = styled.legend`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.darkblue};
  margin-bottom: 24px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 24px;
  border-top: ${({ theme }) => theme.borders.secondaryBorder};
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 112px;
  height: 95px;
  transition: border ${({ theme }) => theme.transition};

  &:checked + div {
    border: ${({ theme }) => theme.borders.accenLighttBorder};
  }

`;

export const OptionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 95px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 112px;
  height: 95px;
  border-radius: 10px;
  border: ${({ theme }) => theme.borders.mainBorder};
`;

export const OptionIcon = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  stroke: ${({ theme }) => theme.colors.darkblue};
`;
