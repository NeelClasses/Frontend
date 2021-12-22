import {
  AboutUsWrapper,
  ContentSection,
  TitleSection,
  Heading,
  SubHeading,
  TextSection,
  ContentHeading,
  ContentText,
  Image,
  ContactButton,
  ContentTextSection,
} from "./styled";
import contentImg from "../../constants/Images/RahulSir.jpg";
import { Content } from "../../globalStyles";
const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <TitleSection>
        <Content>
          <ContentTextSection>
            <Heading>About Us</Heading>
            <SubHeading>
              Everything to know about <span>Neel Classes</span>
            </SubHeading>
          </ContentTextSection>
        </Content>
      </TitleSection>
      <Content>
        <ContentSection>
          <Image src={contentImg} alt="About us" />
          <TextSection>
            <ContentHeading>Welcome to our Institute</ContentHeading>
            <ContentText>
              "Life is good for only two things, Discovering Mathematics and
              Teaching Mathematics."
              <br />
              <br />I am Rahul Suresh Badgujar, and I like to teach Mathematics.
              I have been following this passion for last 8 years. I have
              completed my Diploma in B.E. Mechanical Engineering, with M. Tech
              in Design Engineering.
            </ContentText>
            <ContactButton to="/contact">Contact Us</ContactButton>
          </TextSection>
        </ContentSection>
      </Content>
    </AboutUsWrapper>
  );
};

export default AboutUs;
