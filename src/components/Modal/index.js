import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CloseButton, ModalWrapper, VideoModalContainer } from "./styled";

const Modal = ({ Component, isOpen, onClose }) => {
  return (
    <ModalWrapper open={isOpen}>
      <VideoModalContainer>
        <Component />
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} size="2x" color="#fff" />
        </CloseButton>
      </VideoModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
