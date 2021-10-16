import { Content } from "../../globalStyles";
import {
  ContentTextSection,
  Heading,
  SubHeading,
  TitleSection,
} from "../AboutUs/styled";
import courseImg from "../../constants/Images/courseImage.jpg";
import {
  AccordionContent,
  AccordionHeading,
  AccordionText,
  AccordionWrapper,
  ContentSection,
  CourseTitle,
  CourseWrapper,
  Detail,
  Details,
  EnrollBtn,
  HeadingText,
  Image,
  LeftSection,
  PlusIcon,
  Price,
  RatingSection,
  RightSection,
  RowCell,
  Title,
  BottomSection,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCodeBranch,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { constants } from "../../constants";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const CourseDetails = () => {
  const [activeNotes, setActiveNotes] = useState(false),
    [activeVideo, setActiveVideo] = useState(false),
    [activeModal, setActiveModal] = useState(false),
    toggleModal = () => {
      setActiveModal(!activeModal);
    };

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("stopScroll");
    } else {
      document.body.classList.remove("stopScroll");
    }
  }, [activeModal]);
  return (
    <>
      <CourseWrapper>
        <TitleSection>
          <Content>
            <ContentTextSection>
              <Heading>Course Details</Heading>
              <SubHeading>
                Course Details by <span>Neel Classes</span>
              </SubHeading>
            </ContentTextSection>
          </Content>
        </TitleSection>
        <Content>
          <ContentSection>
            <LeftSection>
              <CourseTitle>The General Theory of Relativity</CourseTitle>
              <Image src={courseImg} alt="Course Image" />
            </LeftSection>
            <RightSection>
              <Price>&#8377;200</Price>
              <EnrollBtn>Enroll Now</EnrollBtn>
              <Details>
                <Detail>
                  <RowCell>
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      rotation={180}
                      flip="vertical"
                      color={constants.colors.secondaryColor}
                    />
                  </RowCell>
                  <RowCell>Branch</RowCell>
                  <RowCell>:</RowCell>
                  <RowCell>Mechanical</RowCell>
                </Detail>
                <Detail>
                  <RowCell>
                    <FontAwesomeIcon
                      icon={faUser}
                      color={constants.colors.secondaryColor}
                    />
                  </RowCell>
                  <RowCell>Instructor</RowCell>
                  <RowCell>:</RowCell>
                  <RowCell>Mr.Rahul Suresh Badgujar</RowCell>
                </Detail>
                <Detail>
                  <RowCell>
                    <FontAwesomeIcon
                      icon={faAward}
                      color={constants.colors.secondaryColor}
                    />
                  </RowCell>
                  <RowCell>Rating</RowCell>
                  <RowCell>:</RowCell>
                  <RowCell>
                    <RatingSection>
                      <FontAwesomeIcon
                        icon={faStar}
                        color={constants.colors.secondaryColor}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color={constants.colors.secondaryColor}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color={constants.colors.secondaryColor}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color={constants.colors.secondaryColor}
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        color={constants.colors.secondaryColor}
                      />
                    </RatingSection>
                  </RowCell>
                </Detail>
              </Details>
            </RightSection>
          </ContentSection>
          <BottomSection>
            <Title>Course Video</Title>
            <AccordionWrapper isActive={activeVideo}>
              <AccordionHeading onClick={() => setActiveVideo(!activeVideo)}>
                <HeadingText>The General Theory of Relativity</HeadingText>
                <PlusIcon isActive={activeVideo}>+</PlusIcon>
              </AccordionHeading>
              <AccordionContent isActive={activeVideo}>
                <AccordionText isActive={activeVideo} onClick={toggleModal}>
                  Lorem ipsum dor sit amet.
                </AccordionText>
              </AccordionContent>
            </AccordionWrapper>
          </BottomSection>
          <BottomSection>
            <Title>Course Notes</Title>
            <AccordionWrapper isActive={activeNotes}>
              <AccordionHeading onClick={() => setActiveNotes(!activeNotes)}>
                <HeadingText>The General Theory of Relativity</HeadingText>
                <PlusIcon isActive={activeNotes}>+</PlusIcon>
              </AccordionHeading>
              <AccordionContent isActive={activeNotes}>
                <AccordionText isActive={activeNotes}>
                  Lorem ipsum dor sit amet.
                </AccordionText>
              </AccordionContent>
            </AccordionWrapper>
          </BottomSection>
        </Content>
      </CourseWrapper>
      <VideoPlayer
        isOpen={activeModal}
        toggleModal={toggleModal}
        videoSource="https://firebasestorage.googleapis.com/v0/b/neelclasses-8e371.appspot.com/o/Videos%2F20200827-130221-480x852.mp4?alt=media&token=5ffd762d-65a4-49a3-8b72-718ab2134d3d"
      />
    </>
  );
};

export default CourseDetails;
