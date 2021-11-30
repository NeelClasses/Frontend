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
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

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
          {constants.headerDetails.dropDownDetails.map((dropDown, index) => (
            <DropDownLink key={index}>
              <DropDownHeading>
                {dropDown.heading} <FontAwesomeIcon icon={faCaretDown} />
              </DropDownHeading>
              <DropDown>
                {dropDown.content.map((item, index) => (
                  <DropDownItem key={index}>
                    <StyledLink
                      onClick={() =>
                        history.push({
                          state: {
                            apiUrl: item.apiUrl,
                          },
                          pathname: item.link,
                        })
                      }
                    >
                      {item.label}
                    </StyledLink>
                  </DropDownItem>
                ))}
              </DropDown>
            </DropDownLink>
          ))}
          <StyledLink
            key="/aboutUs"
            isSidebar={false}
            onClick={() => onLinksClicked("/about")}
            isActive={pathname.includes("/about")}
          >
            About Us
          </StyledLink>
          <StyledLink
            key="/aboutUs"
            isSidebar={false}
            onClick={() => onLinksClicked("/contact")}
            isActive={pathname.includes("/contact")}
          >
            Contact
          </StyledLink>
          {userInfo?.id && (
            <DropDownLink>
              <DropDownHeading>
                My Account <FontAwesomeIcon icon={faCaretDown} />
              </DropDownHeading>
              <DropDown>
                <DropDownItem>
                  <StyledLink
                    isSidebar={false}
                    onClick={() => onLinksClicked("/my-courses")}
                  >
                    My Courses
                  </StyledLink>
                </DropDownItem>
                <DropDownItem>
                  <StyledLink isSidebar={false} onClick={handleLogout}>
                    Log Out
                  </StyledLink>
                </DropDownItem>
              </DropDown>
            </DropDownLink>
          )}
        </Links>
        <Buttons isSidebar={false}>
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
          {/* {userInfo?.id && (
            <StyledLink
              key="/my-courses"
              isSidebar={false}
              onClick={() => onLinksClicked("/my-courses")}
              isActive={pathname.includes("/my-courses")}
            >
              My Courses
            </StyledLink>
          )}
          {userInfo?.id && (
            <Button isPrimary={false} isSidebar={false} onClick={handleLogout}>
              Log Out
            </Button>
          )} */}
        </Buttons>
        <ToggleButton isActive={isSidebarActive} onClick={toggleSidebar}>
          {isSidebarActive ? "Close" : "Menu"}
        </ToggleButton>
      </HeaderWrapper>
      <Sidebar active={isSidebarActive}>
        <SidebarWrapper isSidebar={isSidebarActive}>
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
                    <StyledLink
                      to="/"
                      key={index}
                      onClick={() =>
                        history.push({
                          state: {
                            apiUrl: item.apiUrl,
                          },
                          pathname: item.link,
                        })
                      }
                    >
                      {item.label}
                    </StyledLink>
                  ))}
                </AccordionText>
              </AccordionContent>
            </AccordionWrapper>
          ))}
          <StyledLink
            key="/aboutUs"
            isSidebar={true}
            onClick={() => onLinksClicked("/about")}
            isActive={pathname.includes("/about")}
          >
            About Us
          </StyledLink>
          <StyledLink
            key="/aboutUs"
            isSidebar={true}
            onClick={() => onLinksClicked("/contact")}
            isActive={pathname.includes("/contact")}
          >
            Contact
          </StyledLink>
          {userInfo?.id && (
            <AccordionWrapper isActive={activeNotes === "my-account"}>
              <AccordionHeading
                onClick={() => {
                  activeNotes === "my-account"
                    ? setActiveNotes(null)
                    : setActiveNotes("my-account");
                }}
              >
                <HeadingText>My Account</HeadingText>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  rotation={activeNotes === "my-account" ? "180" : 0}
                />
              </AccordionHeading>
              <AccordionContent isActive={activeNotes === "my-account"}>
                <AccordionText isActive={activeNotes === "my-account"}>
                  <StyledLink
                    isSidebar={true}
                    onClick={() => onLinksClicked("/my-courses")}
                    isActive={pathname.includes("/my-courses")}
                  >
                    My Courses
                  </StyledLink>
                  <StyledLink isSidebar={true} onClick={handleLogout}>
                    Log Out
                  </StyledLink>
                </AccordionText>
              </AccordionContent>
            </AccordionWrapper>
          )}
          {/* {userInfo?.id && (
            <StyledLink
              key="/my-courses"
              isSidebar={false}
              onClick={() => onLinksClicked("/my-courses")}
              isActive={pathname.includes("/my-courses")}
            >
              My Courses
            </StyledLink>
          )} */}
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
            {/* {userInfo?.id && (
              <Button isPrimary={false} isSidebar={true} onClick={handleLogout}>
                Log Out
              </Button>
            )} */}
          </Buttons>
        </SidebarWrapper>
      </Sidebar>
    </Content>
  );
};

export default Header;
