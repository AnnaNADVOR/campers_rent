import styled from '@emotion/styled';
import Img from '../../assets/icons/heroImage.jpg';

export const Hero = styled.section`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  border-radius: 10px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.5)
    ),
    url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin: 0 auto;
  max-width: 690px;
  font-size: 44px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.milky};
`;

export const Advantages = styled.section`
  padding-top: 94px;
  padding-bottom: 94px;
`;

export const AdvantagesTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  line-height: 24px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.darkblue};
`;

export const AdvantagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const AdvantageItem = styled.li`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  font-size: 16px;
  flex-basis: calc((100% - 90px) / 4);
`;

export const AdvantageLable = styled.div`
  margin-bottom: 30px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  svg {
    width: 90px;
    height: 90px;

    fill: ${({ theme }) => theme.colors.darkblue};
  }
`;

export const AdvantageTitle = styled.h3`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkblue};
`;
