import {
  BottomSection,
  CopyRight,
  FooterWrapper,
  Icon,
  LeftSection,
  QuickLinks,
  QuickLinksHeading,
  SocialLink,
  SocialLinks,
  StyledLink,
  Tagline,
  TopSection,
  QuickLinksSection,
} from "./styled";
import FooterConfig from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "../../../globalStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        <TopSection>
          <LeftSection>
            <Icon>Neel Classes</Icon>
            <Tagline>
              Life is good for only two things, Discovering Mathematics and
              Teaching Mathematics.
            </Tagline>
          </LeftSection>
          <QuickLinksSection>
            <QuickLinksHeading>Quick Links</QuickLinksHeading>
            <QuickLinks>
              {FooterConfig.navLinks.map((link) => (
                <StyledLink to={link.to}>{link.label}</StyledLink>
              ))}
            </QuickLinks>
          </QuickLinksSection>
        </TopSection>
        <BottomSection>
          <SocialLinks>
            {FooterConfig.socialLinks.map((link) => (
              <SocialLink href={link.to} target="_blank">
                <FontAwesomeIcon icon={link.icon} iconColor="#fff" />
              </SocialLink>
            ))}
          </SocialLinks>
          <CopyRight>
            All Right Reserved. Copyright {new Date().getFullYear()}
          </CopyRight>
        </BottomSection>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;
