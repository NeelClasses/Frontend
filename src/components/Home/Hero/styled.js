import styled from "styled-components";
import HomeBanner from "../../../constants/Images/HomeBanner.jpg";
export const HeroWrapper = styled.div`
  height: 100vh;
  color: var(--primary-color);
  background-image: url(${HomeBanner});
  background-position: cover;
`;

export const TextSection = styled.div`
  max-width: 41rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopText = styled.p`
  color: var(--secondary-color);
  font-size: 22px;
  font-weight: 500;
  @media only screen and (max-width: 414px) {
    font-size: 1.1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 1rem 0;
  @media only screen and (max-width: 414px) {
    font-size: 2rem;
  }
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

export const SearchBarWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const SearchBar = styled.input`
  width: 15rem;
  border: 1px solid var(--primary-color);
  border-right: none;
  padding: 9px 12px 10px;
  height: 40px;
  outline: none;
  color: var(--primary-color);
  border-radius: 6px 0 0 6px;
  font-size: 16px;
  border-radius: 20px 0 0 20px;
  font-weight: 500;
  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  padding-right: 32px;
  padding-left: 10px;
  border: 1px solid var(--primary-color);
  background: var(--primary-color);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  border-radius: 0 20px 20px 0;
`;

export const StartButton = styled.button`
  border: none;
  outline: none;
  padding: 7px 20px;
  margin: 1rem 0;
  background-color: var(--primary-color);
  border-radius: 20px;
  color: #fff;
`;

export const Video = styled.iframe`
  width: 700px;
  height: 400px;
  border: none;
  @media only screen and (max-width: 800px) {
    width: 80vw;
    height: 50vw;
  }
  @media only screen and (max-width: 375px) {
    width: 296px;
    height: 185px;
  }
`;
