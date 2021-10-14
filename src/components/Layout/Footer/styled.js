import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  color: #fff;
  background-color: var(--primary-color);
`;

export const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-bottom: 0.5px solid #fff;
  padding-bottom: 2rem;
  @media only screen and (max-width: 592px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0;
  }
`;

export const LeftSection = styled.div`
  max-width: 15rem;
  margin-right: 3rem;
`;

export const Icon = styled.h2`
  font-weight: 700;
`;

export const Tagline = styled.p`
  margin-top: 1rem;
  letter-spacing: 0.5px;
  /* word-spacing: 8px; */
`;
export const QuickLinksSection = styled.div`
  @media only screen and (max-width: 415px) {
    padding: 1.5rem 0;
  }
`;
export const QuickLinks = styled.div`
  height: 4rem;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  @media only screen and (max-width: 1024px) {
    height: unset;
  }
  @media only screen and (max-width: 592px) {
    margin-bottom: 0;
  }
`;

export const QuickLinksHeading = styled.h4`
  margin-top: 12px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  font-weight: 400;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
  margin-top: 1rem;
  margin-right: 3rem;
`;

export const GetInTouch = styled.div`
  max-width: 300px;
  margin-left: auto;
  margin-bottom: 1rem;
  @media only screen and (max-width: 592px) {
    margin-left: 0;
  }
`;

export const GetInTouchHeading = styled.h4`
  margin: 12px;
  @media only screen and (max-width: 592px) {
    margin-left: 0;
  }
`;

export const Address = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  span {
    margin-left: 1rem;
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
    color: #fff;
    &:hover {
      text-decoration: underline;
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
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  padding-top: 3rem;
  align-items: center;
  @media only screen and (max-width: 414px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    padding-top: 1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  @media only screen and (max-width: 414px) {
    padding: 0.5rem 0;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 1rem;
  font-size: 1.2rem;
  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

export const CopyRight = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
`;
