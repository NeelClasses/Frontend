import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AccordionContent,
  AccordionHeading,
  AccordionText,
  AccordionWrapper,
  BottomSection,
  HeadingText,
  NoteLink,
  PlusIcon,
  Title,
} from "./styled";

const NoteAccordions = ({ courseNotes, activeNotes, toggleActiveNotes }) => {
  return (
    <BottomSection>
      <Title>Course Notes</Title>
      {courseNotes && courseNotes?.length !== 0 ? (
        courseNotes?.map((note, index) => (
          <AccordionWrapper
            isActive={activeNotes === note?.docTitle}
            key={index}
          >
            <AccordionHeading onClick={() => toggleActiveNotes(note?.docTitle)}>
              <HeadingText>{note?.docTitle}</HeadingText>
              <PlusIcon isActive={activeNotes === note?.docTitle}>+</PlusIcon>
            </AccordionHeading>
            <AccordionContent isActive={activeNotes === note?.docTitle}>
              <AccordionText isActive={activeNotes === note?.docTitle}>
                <NoteLink href={note?.docUrl} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faPlayCircle} /> {note?.docTitle}
                </NoteLink>
              </AccordionText>
            </AccordionContent>
          </AccordionWrapper>
        ))
      ) : (
        <p>No Notes Available. </p>
      )}
    </BottomSection>
  );
};

export default NoteAccordions;
