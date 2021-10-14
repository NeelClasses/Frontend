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
import { useHistory } from "react-router";
import { Content } from "../../../globalStyles";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false),
    toggleSidebar = () => {
      setIsSidebarActive((st) => !st);
      if (!isSidebarActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
    history = useHistory();
  const onLinksClicked = (link) => {
    setIsSidebarActive(false);
    history.push(link);
  };
  return (
    <Content>
      <HeaderWrapper>
        <NavIcon>
          <h3>Neel Classes</h3>
        </NavIcon>
        <Links isSidebar={false}>
          {config.navLinks.map((link, index) => (
            <StyledLink
              key={index}
              isSidebar={false}
              onClick={() => onLinksClicked(link.to)}
            >
              {link.label}
            </StyledLink>
          ))}
        </Links>
        <Buttons isSidebar={false}>
          {config.ctaButtons.map((button, index) => (
            <Button
              key={index}
              isPrimary={button.isPrimary}
              isSidebar={false}
              onClick={() => onLinksClicked(button.to)}
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
            {config.navLinks.map((link, index) => (
              <StyledLink
                key={index}
                isSidebar={true}
                onClick={() => onLinksClicked(link.to)}
              >
                {link.label}
              </StyledLink>
            ))}
          </Links>
          <Buttons isSidebar={true}>
            {config.ctaButtons.map((button, index) => (
              <Button
                key={index}
                isPrimary={button.isPrimary}
                isSidebar={true}
                onClick={() => onLinksClicked(button.to)}
              >
                {button.label}
              </Button>
            ))}
          </Buttons>
        </SidebarWrapper>
      </Sidebar>
    </Content>
  );
};

export default Header;
