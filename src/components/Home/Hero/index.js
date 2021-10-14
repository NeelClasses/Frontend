import {
  Heading,
  HeroWrapper,
  SubText,
  TextSection,
  TopText,
  TextWrapper,
} from "./styled";
import { Content } from "../../../globalStyles";

const Hero = () => {
  return (
    <HeroWrapper>
      <Content>
        <TextWrapper>
          <TextSection>
            <TopText>Welcome to Neel Classes</TopText>
            <Heading>A New Way to Learn With Us</Heading>
            <SubText>
              Lorem ipsum dol sit amet Lorem ipsum dol sit amet Lorem ipsum dol
              sit amet Lorem ipsum dol sit amet Lorem ipsum dol sit amet Lorem
              ipsum dol sit amet Lorem ipsum dol sit amet
            </SubText>
          </TextSection>
        </TextWrapper>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
