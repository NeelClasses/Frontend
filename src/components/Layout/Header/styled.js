import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  padding: 1rem 0;
  display: flex;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 2.5rem;
    width: 2.5rem;
    color: var(--primary-color);
    filter: invert(9%) sepia(74%) saturate(2313%) hue-rotate(184deg)
      brightness(98%) contrast(102%);
  }
  span {
    margin-left: 1rem;
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 600;
  }
  @media only screen and (max-width: 414px) {
    span {
      margin-left: 0.5rem;
      font-size: 16px;
    }
    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }
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
  @media only screen and (max-width: 1098px) {
    display: ${(props) => (props.isSidebar ? "flex" : "none")};
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const StyledLink = styled.button`
  padding: 0.5rem;
  text-decoration: none;
  outline: none;
  text-align: left;
  color: ${(props) =>
    props.isActive ? "var(--secondary-color)" : "var(--primary-color)"};
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 840px) {
    padding: 0.7rem 1rem;
    border-bottom: 1px solid #eaeaea;
    width: 100%;
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
    &:first-child {
      border-top: 1px solid #eaeaea;
    }
  }
`;

export const DropDownLink = styled.div`
  position: relative;
  &:hover,
  &:focus,
  &:focus-within {
    background: var(--primary-color);
    & > div {
      display: block;
    }
    & > p {
      color: #fff;
    }
  }
`;

export const DropDown = styled.div`
  position: absolute;
  top: 30px;
  background: var(--background-color);
  z-index: 999999;
  display: none;
  /* width: 100%; */
`;

export const DropDownHeading = styled.p`
  padding: 4px 1rem;
`;

export const DropDownItem = styled.div`
  width: 100%;
  padding: 1px 0;
  border-bottom: 1px solid var(--primary-color);
  &:last-child {
    border: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  @media only screen and (max-width: 1098px) {
    display: ${(props) => (props.isSidebar ? "flex" : "none")};
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem 1.5rem;
  }
`;

export const Button = styled.button`
  margin-left: 1rem;
  padding: 0.4rem 1.4rem;
  font-weight: 500;
  font-size: 16px;
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
    width: 7rem;
    margin: 0.5rem 0 !important;
    text-align: center;
  }
`;

export const ToggleButton = styled.div`
  display: none;
  cursor: pointer;
  border: 1px solid var(--primary-color);
  padding: 0.3rem 0.5rem;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isActive ? "#fff" : "var(--primary-color)")};
  background-color: ${(props) =>
    props.isActive ? "var(--primary-color)" : "#fff"};
  @media only screen and (max-width: 1098px) {
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
  height: 100vh;
  overflow: auto;
  background-color: #fffcf7;
  transition: 0.5s all ease;
  position: absolute;
  width: 70%;
  right: ${(props) => (props.isSidebar ? "0px" : "-400px")};
`;

export const AccordionWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;
  border-bottom: 1px solid #eaeaea;
  @media only screen and (max-width: 414px) {
    padding: 0.6rem;
  }
`;

export const AccordionHeading = styled.button`
  display: flex;
  border: none;
  width: 100%;
  color: var(--primary-color);
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
`;

export const HeadingText = styled.span``;

export const PlusIcon = styled.span`
  color: var(--primary-color);
  font-size: 29px;
  line-height: 29px;
  font-weight: 500;
  align-self: center;
  transform: ${(props) => (props.isActive ? "rotate(45deg)" : "rotate(0deg)")};
  transition: all 400ms ease-in-out;
`;

export const AccordionContent = styled.div`
  color: #1f1f1f;
  max-height: ${(props) => (props.isActive ? "9999px" : 0)};
  background-color: var(---background-color);
  overflow: hidden;
  transition: all
    ${({ isActive }) =>
      isActive ? "400ms cubic-bezier(1,0,1,0)" : "400ms cubic-bezier(0,1,0,1)"};
`;

export const AccordionText = styled.div`
  padding: 0.5rem 0;
  /* border-bottom: ${({ isActive }) =>
    isActive ? "1px solid #e3e3e3" : "none"}; */
  text-align: left;
`;
