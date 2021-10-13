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
} from "./styled";
import FooterConfig from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <FooterWrapper>
      <TopSection>
        <LeftSection>
          <Icon>Neel Classes</Icon>
          <Tagline>
            Life is good for only two things, Discovering Mathematics and
            Teaching Mathematics.
          </Tagline>
        </LeftSection>
        <div>
          <QuickLinksHeading>Quick Links</QuickLinksHeading>
          <QuickLinks>
            {FooterConfig.navLinks.map((link) => (
              <StyledLink to={link.to}>{link.label}</StyledLink>
            ))}
          </QuickLinks>
        </div>
      </TopSection>
      <BottomSection>
        <SocialLinks>
          {FooterConfig.socialLinks.map((link) => (
            <SocialLink href={link.to}>
              <FontAwesomeIcon icon={link.icon} iconColor="#fff" />
            </SocialLink>
          ))}
          {/* <a href="/">
            <FontAwesomeIcon icon={faTw} iconColor="#fff" size="2x" />
          </a> */}
        </SocialLinks>
        <CopyRight>
          All Right Reserved. Copyright {new Date().getFullYear()}
        </CopyRight>
      </BottomSection>
    </FooterWrapper>
  );
};

export default Footer;
