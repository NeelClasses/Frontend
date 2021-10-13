import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  max-width: 1920px;
  overflow: hidden;
  padding: 1rem 1.5rem;
  display: flex;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavIcon = styled.div`
  padding: 0 1rem;
  min-width: 10rem;
`;

export const ToggleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 3rem;
  width: 100%;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 840px) {
    display: ${(props) => (props.isSidebar ? "flex" : "none")};
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0 1rem;
  text-decoration: none;
  outline: none;
  color: var(--primary-color);
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
  margin-top: ${(props) => (props.isSidebar ? "1rem" : "0px")};
  @media only screen and (max-width: 840px) {
    padding: 0.5rem 1.5rem;
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    text-align: right;
  }
`;

export const Buttons = styled.div`
  display: flex;
  @media only screen and (max-width: 840px) {
    display: ${(props) => (props.isSidebar ? "flex" : "none")};
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    padding: 0.5rem 1.5rem;
  }
`;

export const Button = styled(Link)`
  margin: 0 0.5rem;
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  font-size: 14px;
  background-color: ${(props) =>
    props.isPrimary ? "var(--primary-color)" : "var(--secondary-color)"};
  color: ${(props) => (props.isPrimary ? "#fff" : "var(--primary-color)")};
  border-radius: 5px;
  border: 2px solid
    ${(props) =>
      props.isPrimary ? "var(--primary-color)" : "var(--secondary-color)"};
  transition: 0.2s all ease-in-out;
  margin-top: ${(props) => (props.isSidebar ? "1rem" : "0px")};
  &:hover {
    color: var(--primary-color);
    background-color: #fff;
  }
  @media only screen and (max-width: 840px) {
    width: 6.5rem;
    margin: 0.5rem 0 !important;
    text-align: center;
  }
`;

export const ToggleButton = styled.div`
  display: none;
  border: 1px solid var(--primary-color);
  padding: 0.3rem 0.5rem;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isActive ? "#fff" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.isActive ? "var(--primary-color)" : "#fff"};
  @media only screen and (max-width: 840px) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 4rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: none;
  background: ${(props) => (props.active ? "rgba(0, 0, 0, 0.7);" : "none")};
  @media only screen and (max-width: 840px) {
    display: ${(props) => (props.active ? "block" : "none")};
  }
`;

export const SidebarWrapper = styled.div`
  height: 100%;
  overflow: auto;
  background-color: #fff;
  transition: 0.5s all ease;
  position: absolute;
  width: 70%;
  right: ${(props) => (props.isSidebar ? "0px" : "-400px")};
`;
