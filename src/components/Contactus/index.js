import {
  Address,
  ContactusWrapper,
  ContentSection,
  ContentTextSection,
  Email,
  GetInTouch,
  Heading,
  Links,
  Map,
  Phone,
  SubHeading,
  TitleSection,
} from "./styled";
import { Content } from "../../globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { constants } from "../../constants";
const ContactUs = () => {
  return (
    <ContactusWrapper>
      <TitleSection>
        <Content>
          <ContentTextSection>
            <Heading>Contact Us</Heading>
            <SubHeading>
              Get in touch with <span>Neel Classes</span>
            </SubHeading>
          </ContentTextSection>
        </Content>
      </TitleSection>
      <Content>
        <ContentSection>
          <GetInTouch>
            <Address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>
                <h4>Dharangaon</h4>
                {constants.contactUsDetails.addresses.Dharangaon}
                <br /> Pin: {constants.contactUsDetails.addresses.DharangaonPin}
              </span>
            </Address>
            <Address>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>
                <h4>Jalgaon</h4>
                {constants.contactUsDetails.addresses.Jalgaon}
                <br /> Pin: {constants.contactUsDetails.addresses.DharangaonPin}
              </span>
            </Address>
            <Phone>
              <FontAwesomeIcon icon={faPhone} rotation={90} color="#002a45" />
              <Links>
                {constants.contactUsDetails.phones.map((phone) => (
                  <a href={`tel:${phone}`}>{phone}</a>
                ))}
              </Links>
            </Phone>
            <Email>
              <FontAwesomeIcon icon={faEnvelope} />
              {constants.contactUsDetails.emails.map((mail) => (
                <a href={`mailto:${mail}`}>{mail}</a>
              ))}
            </Email>
          </GetInTouch>
          <Map
            src={constants.contactUsDetails.mapSource}
            width="600"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="Map Location"
          />
        </ContentSection>
      </Content>
    </ContactusWrapper>
  );
};

export default ContactUs;
