import {
  Heading,
  HeroWrapper,
  SubText,
  TextSection,
  TopText,
  TextWrapper,
  Video,
  StartButton,
} from "./styled";
import { Content } from "../../../globalStyles";
import { useState } from "react";
import Modal from "../../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const YTVideo = () => {
  return (
    <Video
      src="https://www.youtube.com/embed/NSzJa0NVzRE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false),
    toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
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
            <StartButton onClick={toggleModal}>
              Let's Start &nbsp;
              <FontAwesomeIcon icon={faPlay} />
            </StartButton>
          </TextSection>
        </TextWrapper>
      </Content>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} Component={YTVideo} onClose={toggleModal} />
      )}
    </HeroWrapper>
  );
};

export default Hero;
