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
  GetInTouch,
  Phone,
  Address,
  Email,
  GetInTouchHeading,
  Links,
} from "./styled";
import FooterConfig from "./config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "../../../globalStyles";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
          <GetInTouch>
            <GetInTouchHeading>Get In Touch</GetInTouchHeading>
            <Address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>
                6/1, Chintamani Moraya Nagar, Dharangaon, Dist. Jalgaon,
                <br /> Pin: 425105
              </span>
            </Address>
            <Phone>
              <FontAwesomeIcon icon={faPhone} rotation={90} />
              <Links>
                <a href="tel:+91-8767-346-075">+91-8767-346-075</a>
                <a href="tel:+91-9545-583-393">+91-9545-583-393</a>
              </Links>
            </Phone>
            <Email>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:rahulcricket91@gmail.com">
                rahulcricket91@gmail.com
              </a>
            </Email>
          </GetInTouch>
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
