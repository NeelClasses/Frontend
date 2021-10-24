import Plyr from "plyr-react";
import React, { useState } from "react";
import { VideoContainer } from "./styled";
import Modal from "../Modal";

const VideoPlayer = ({ isOpen, toggleModal, videoSource }) => {
  const [source] = useState({
    type: "video",
    sources: [
      {
        src: videoSource,
      },
    ],
  });
  const VideoModal = () => {
    return (
      <VideoContainer>
        <Plyr source={source} options={{}} />
      </VideoContainer>
    );
  };
  return (
    isOpen && (
      <Modal open={isOpen} Component={VideoModal} onClose={toggleModal} />
    )
  );
};

export default VideoPlayer;
