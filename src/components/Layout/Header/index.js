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
} from "./styled";
import config from "./config";
import { useState } from "react";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false),
    toggleSidebar = () => {
      setIsSidebarActive((st) => !st);
      if (!isSidebarActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
  return (
    <>
      <HeaderWrapper>
        <NavIcon>
          <h3>Neel Classes</h3>
        </NavIcon>
        <Links isSidebar={false}>
          {config.navLinks.map((link) => (
            <StyledLink to={link.to} isSidebar={false}>
              {link.label}
            </StyledLink>
          ))}
        </Links>
        <Buttons isSidebar={false}>
          {config.ctaButtons.map((button) => (
            <Button
              to={button.to}
              isPrimary={button.isPrimary}
              isSidebar={false}
            >
              {button.label}
            </Button>
          ))}
        </Buttons>
        <ToggleButton isActive={isSidebarActive} onClick={toggleSidebar}>
          {isSidebarActive ? "Close" : "Menu"}
        </ToggleButton>
      </HeaderWrapper>
      <Sidebar active={isSidebarActive}>
        <SidebarWrapper isSidebar={isSidebarActive}>
          <Links isSidebar={true}>
            {config.navLinks.map((link) => (
              <StyledLink to={link.to} isSidebar={true}>
                {link.label}
              </StyledLink>
            ))}
          </Links>
          <Buttons isSidebar={true}>
            {config.ctaButtons.map((button) => (
              <Button
                to={button.to}
                isPrimary={button.isPrimary}
                isSidebar={true}
              >
                {button.label}
              </Button>
            ))}
          </Buttons>
        </SidebarWrapper>
      </Sidebar>
    </>
  );
};

export default Header;
