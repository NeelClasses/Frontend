import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plyr from "plyr-react";
import React, { useState } from "react";
import {
  CloseButton,
  ModalWrapper,
  VideoContainer,
  VideoModalContainer,
} from "./styled";

const VideoPlayer = ({ isOpen, toggleModal, videoSource }) => {
  const [source] = useState({
    type: "video",
    sources: [
      {
        src: videoSource,
      },
    ],
  });
  return (
    isOpen && (
      <ModalWrapper open={isOpen}>
        <VideoModalContainer>
          <VideoContainer>
            <Plyr source={source} options={{}} />
          </VideoContainer>
          <CloseButton onClick={toggleModal}>
            <FontAwesomeIcon icon={faTimes} size="2x" color="#fff" />
          </CloseButton>
        </VideoModalContainer>
      </ModalWrapper>
    )
  );
};

export default VideoPlayer;
