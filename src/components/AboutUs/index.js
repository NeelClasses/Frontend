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
} from "./styled";
import contentImg from "../../constants/Images/about.jpg";
const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <TitleSection>
        <Heading>About Us</Heading>
        <SubHeading>
          Everything to know about <span>Neel Classes</span>
        </SubHeading>
      </TitleSection>
      <ContentSection>
        <Image src={contentImg} alt="About us" />
        <TextSection>
          <ContentHeading>Welcome to our Institute</ContentHeading>
          <ContentText>
            "Life is good for only two things, Discovering Mathematics and
            Teaching Mathematics."
            <br />
            <br />I am Rahul Suresh Badgujar, and I like to teach Mathematics. I
            have been following this passion for last 8 years. I have completed
            my Diploma in B.E. Mechanical Engineering, with M. Tech in Design
            Engineering.
          </ContentText>
          <ContactButton>Contact Us</ContactButton>
        </TextSection>
      </ContentSection>
    </AboutUsWrapper>
  );
};

export default AboutUs;
