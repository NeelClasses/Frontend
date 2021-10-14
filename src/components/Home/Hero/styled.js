import styled from "styled-components";
import HomeBanner from "../../../constants/Images/HomeBanner.jpg";
export const HeroWrapper = styled.div`
  height: 100vh;
  color: var(--primary-color);
  background-image: url(${HomeBanner});
  background-position: cover;
`;

export const TextSection = styled.div`
  max-width: 28rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopText = styled.p`
  color: var(--secondary-color);
  font-size: 20px;
  font-weight: 500;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const SubText = styled.p`
  color: #888786;
  text-align: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
