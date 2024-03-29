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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "../../../globalStyles";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { constants } from "../../../constants";

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
              {constants.footerDetails.navLinks.map((link, index) => (
                <StyledLink key={index} to={link.to}>
                  {link.label}
                </StyledLink>
              ))}
            </QuickLinks>
          </QuickLinksSection>
          <GetInTouch>
            <GetInTouchHeading>Get In Touch</GetInTouchHeading>
            <Address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>
                {constants.contactUsDetails.addresses.Dharangaon}
                <br /> Pin: {constants.contactUsDetails.addresses.DharangaonPin}
              </span>
            </Address>
            <Phone>
              <FontAwesomeIcon icon={faPhone} rotation={90} />
              <Links>
                {constants.contactUsDetails.phones.map((phone,index) => (
                  <a key={index} href={`tel:${phone}`}>{phone}</a>
                ))}
              </Links>
            </Phone>
            <Email>
              <FontAwesomeIcon icon={faEnvelope} />
              {constants.contactUsDetails.emails.map((mail,index) => (
                <a key={index} href={`mailto:${mail}`}>
                  {mail}
                </a>
              ))}
            </Email>
          </GetInTouch>
        </TopSection>
        <BottomSection>
          <SocialLinks>
            {constants.footerDetails.socialLinks.map((link,index) => (
              <SocialLink key={index} href={link.to} target="_blank">
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
