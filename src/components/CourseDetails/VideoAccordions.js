import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AccordionContent,
  AccordionHeading,
  AccordionText,
  AccordionWrapper,
  BottomSection,
  HeadingText,
  PlusIcon,
  Title,
} from "./styled";

const VideoAccordions = ({
  courseVideos,
  activeVideo,
  toggleActiveVideo,
  toggleModal,
}) => {
  return (
    <BottomSection>
      <Title>Course Video</Title>
      {courseVideos && courseVideos?.length !== 0 ? (
        courseVideos?.map((video, index) => (
          <AccordionWrapper
            isActive={activeVideo === video?.videoTitle}
            key={index}
          >
            <AccordionHeading
              onClick={() => toggleActiveVideo(video?.videoTitle)}
            >
              <HeadingText>{video?.videoTitle}</HeadingText>
              <PlusIcon isActive={activeVideo === video?.videoTitle}>
                +
              </PlusIcon>
            </AccordionHeading>
            <AccordionContent isActive={activeVideo === video?.videoTitle}>
              <AccordionText
                isActive={activeVideo === video?.videoTitle}
                onClick={() => toggleModal(video?.videoUrl)}
              >
                <FontAwesomeIcon icon={faPlayCircle} /> {video?.videoTitle}
              </AccordionText>
            </AccordionContent>
          </AccordionWrapper>
        ))
      ) : (
        <p>No Videos Available. </p>
      )}
    </BottomSection>
  );
};

export default VideoAccordions;
