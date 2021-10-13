import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  color: #fff;
  background-color: var(--primary-color);
`;

export const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-bottom: 0.5px solid #fff;
  padding-bottom: 2rem;
  max-width: 1280px;
  margin: 0 auto;
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
`;

export const QuickLinks = styled.div`
  height: 4rem;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px) {
    height: unset;
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

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  padding-top: 3rem;
  max-width: 1280px;
  margin: 0 auto;
`;

export const SocialLinks = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 1rem;
  font-size: 1.2rem;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CopyRight = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 14px;
`;
