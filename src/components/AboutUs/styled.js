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
      rgba(0, 42, 69, 1) 0%,
      rgba(0, 42, 69, 0.7) 53.15%,
      rgba(0, 42, 69, 1) 100%
    ),
    url(${BannerImg});
  min-height: 25rem;
  background-size: cover;
  background-position: 50%;
`;

export const ContentTextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 42px;
  @media only screen and (max-width: 414px) {
    font-size: 28px;
  }
`;

export const SubHeading = styled.p`
  color: #fff;
  font-size: 20px;
  span {
    color: var(--secondary-color);
    font-size: 22px;
    font-weight: 500;
  }
  text-align: center;
  @media only screen and (max-width: 414px) {
    font-size: 18px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: center;
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

export const ContactButton = styled.button`
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  font-size: 16px;
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 5px;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;
