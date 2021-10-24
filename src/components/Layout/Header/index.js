import {
  HeaderWrapper,
  NavIcon,
  Links,
  StyledLink,
  Buttons,
  Button,
  Sidebar,
  ToggleButton,
  SidebarWrapper,
  DropDown,
  DropDownItem,
  DropDownLink,
  DropDownHeading,
  AccordionContent,
  AccordionHeading,
  AccordionText,
  AccordionWrapper,
  HeadingText,
} from "./styled";
import { useState } from "react";
import { useHistory } from "react-router";
import { Content } from "../../../globalStyles";
import Logo from "../../../constants/Images/Logo";
import { constants } from "../../../constants";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false),
    [activeNotes, setActiveNotes] = useState(false),
    { userInfo } = useSelector((state) => state.userInfo),
    toggleSidebar = () => {
      setIsSidebarActive((st) => !st);
      if (!isSidebarActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    history = useHistory(),
    dispatch = useDispatch(),
    { pathname } = useLocation();
  console.log(userInfo);
  const onLinksClicked = (link) => {
      setIsSidebarActive(false);
      history.push(link);
      document.body.style.overflow = "auto";
    },
    handleLogout = () => {
      dispatch(logout());
    };
  return (
    <Content>
      <HeaderWrapper>
        <Link to="/">
          <NavIcon>
            <Logo />
            <span>Neel Classes</span>
          </NavIcon>
        </Link>
        <Links isSidebar={false}>
          {/* {constants.headerDetails.navLinks.map((link, index) => (
            <StyledLink
              key={index}
              isSidebar={false}
              onClick={() => onLinksClicked(link.to)}
              isActive={
                link.to === "/" ? pathname === "/" : pathname.includes(link.to)
              }
            >
              {link.label}
            </StyledLink>
          ))} */}
          {constants.headerDetails.dropDownDetails.map((dropDown, index) => (
            <DropDownLink key={index}>
              <DropDownHeading>
                {dropDown.heading} <FontAwesomeIcon icon={faCaretDown} />
              </DropDownHeading>
              <DropDown>
                {dropDown.content.map((item, index) => (
                  <DropDownItem key={index}>
                    <StyledLink>{item.label}</StyledLink>
                  </DropDownItem>
                ))}
              </DropDown>
            </DropDownLink>
          ))}
          <DropDownLink>
            <DropDownHeading>
              Diploma <FontAwesomeIcon icon={faCaretDown} />
            </DropDownHeading>
            <DropDown>
              <DropDownItem>
                <StyledLink>Maths</StyledLink>
              </DropDownItem>
              <DropDownItem>
                <StyledLink>Mech. Engg.</StyledLink>
              </DropDownItem>
              <DropDownItem>
                <StyledLink>Civil. Engg.</StyledLink>
              </DropDownItem>
              <DropDownItem>
                <StyledLink>Videos</StyledLink>
              </DropDownItem>
              <DropDownItem>
                <StyledLink>MCQ</StyledLink>
              </DropDownItem>
            </DropDown>
          </DropDownLink>
        </Links>
        <Buttons isSidebar={false}>
          {/* {constants.headerDetails.ctaButtons.map((button, index) => (
            <Button
              key={index}
              isPrimary={button.isPrimary}
              isSidebar={false}
              onClick={() => onLinksClicked(button.to)}
            >
              {button.label}
            </Button>
          ))} */}
          {!userInfo?.id && (
            <Button
              isPrimary={true}
              isSidebar={false}
              onClick={() => onLinksClicked("/signup")}
            >
              Sign Up
            </Button>
          )}
          {!userInfo?.id && (
            <Button
              isPrimary={false}
              isSidebar={false}
              onClick={() => onLinksClicked("/login")}
            >
              Log In
            </Button>
          )}
          {userInfo?.id && (
            <Button isPrimary={false} isSidebar={false} onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </Buttons>
        <ToggleButton isActive={isSidebarActive} onClick={toggleSidebar}>
          {isSidebarActive ? "Close" : "Menu"}
        </ToggleButton>
      </HeaderWrapper>
      <Sidebar active={isSidebarActive}>
        <SidebarWrapper isSidebar={isSidebarActive}>
          {/* <Links isSidebar={true}>
            {constants.headerDetails.navLinks.map((link, index) => (
              <StyledLink
                key={index}
                isSidebar={true}
                onClick={() => onLinksClicked(link.to)}
                isActive={
                  link.to === "/"
                    ? pathname === "/"
                    : pathname.includes(link.to)
                }
              >
                {link.label}
              </StyledLink>
            ))}
          </Links> */}
          {constants.headerDetails.dropDownDetails.map((dropDown, index) => (
            <AccordionWrapper
              isActive={activeNotes === dropDown.heading}
              key={index}
            >
              <AccordionHeading
                onClick={() => {
                  activeNotes === dropDown.heading
                    ? setActiveNotes(null)
                    : setActiveNotes(dropDown.heading);
                }}
              >
                <HeadingText>{dropDown.heading}</HeadingText>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  rotation={activeNotes === dropDown.heading ? "180" : 0}
                />
              </AccordionHeading>
              <AccordionContent isActive={activeNotes === dropDown.heading}>
                <AccordionText isActive={activeNotes === dropDown.heading}>
                  {dropDown.content.map((item, index) => (
                    <StyledLink to="/">{item.label}</StyledLink>
                  ))}
                </AccordionText>
              </AccordionContent>
            </AccordionWrapper>
          ))}
          <Buttons isSidebar={true}>
            {/* {constants.headerDetails.ctaButtons.map((button, index) => (
              <Button
                key={index}
                isPrimary={button.isPrimary}
                isSidebar={true}
                onClick={() => onLinksClicked(button.to)}
              >
                {button.label}
              </Button>
            ))} */}
            {!userInfo?.id && (
              <Button
                isPrimary={true}
                isSidebar={true}
                onClick={() => onLinksClicked("/signup")}
              >
                Sign Up
              </Button>
            )}
            {!userInfo?.id && (
              <Button
                isPrimary={false}
                isSidebar={true}
                onClick={() => onLinksClicked("/login")}
              >
                Log In
              </Button>
            )}
            {userInfo?.id && (
              <Button isPrimary={false} isSidebar={true} onClick={handleLogout}>
                Log Out
              </Button>
            )}
          </Buttons>
        </SidebarWrapper>
      </Sidebar>
    </Content>
  );
};

export default Header;
