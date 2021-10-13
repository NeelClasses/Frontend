import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerImg from "../../constants/Images/banner.jpg";

export const AboutUsWrapper = styled.div``;

export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
      rgba(0, 122, 223, 0.455) 0%,
      rgba(0, 81, 148, 0.7) 53.15%,
      rgba(0, 122, 223, 0.455) 100%
    ),
    url(${BannerImg});
  min-height: 20rem;
  background-size: cover;
  background-position: 50%;
`;

export const Heading = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 42px;
`;

export const SubHeading = styled.p`
  color: #fff;
  font-size: 20px;
  span {
    color: var(--secondary-color);
    font-size: 22px;
    font-weight: 500;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  margin: 5rem auto;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
  }
`;

export const Image = styled.img`
  width: 500px;
  @media only screen and (max-width: 840px) {
    width: 400px;
  }
`;

export const TextSection = styled.div`
  max-width: 45rem;
  margin: 2rem;
  margin-bottom: 0;
  height: 100%;
`;

export const ContentHeading = styled.h2`
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--primary-color);
`;

export const ContentText = styled.p`
  color: #7b838a;
  margin-bottom: 2rem;
`;

export const ContactButton = styled(Link)`
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 5px;
  /* border: 2px solid var(--primary-color); */
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;
