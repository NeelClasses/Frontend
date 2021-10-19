import styled from "styled-components";
import BannerImg from "../../constants/Images/banner.jpg";

export const ContactusWrapper = styled.div``;

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
  @media only screen and (max-width: 375px) {
    margin-top: 1rem;
    width: 70%;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem auto;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    margin: 2rem auto;
  }
  @media only screen and (max-width: 414px) {
    img {
      width: 100%;
    }
  }
`;

export const GetInTouch = styled.div`
  max-width: 400px;
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 592px) {
    margin-left: 0;
    align-self: flex-start;
  }
`;

export const GetInTouchHeading = styled.h4`
  color: var(--primary-color);
  margin: 12px;
  @media only screen and (max-width: 592px) {
    margin-left: 0;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 18px;
  color: var(--primary-color);
  span {
    margin-left: 1rem;
  }
  @media only screen and (max-width: 592px) {
    font-size: 16px;
  }
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  a {
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    color: var(--primary-color);
    &:hover {
      text-decoration: underline;
    }
    @media only screen and (max-width: 592px) {
      font-size: 16px;
    }
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 1rem;
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    color: var(--primary-color);
    &:hover {
      text-decoration: underline;
    }
    @media only screen and (max-width: 592px) {
      font-size: 16px;
    }
  }
`;

export const Map = styled.iframe`
  border-radius: 1px;
  margin-right: 1rem;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
    width: 100%;
  }
`;
