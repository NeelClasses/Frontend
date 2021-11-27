import Plyr from "plyr-react";
import React, { useState } from "react";
import { VideoContainer } from "./styled";
import Modal from "../Modal";
import ReactPlayer from "react-player";

const VideoPlayer = ({ isOpen, toggleModal, videoSource }) => {
  console.log(videoSource);
  // const [source] = useState({
  //   type: "video",
  //   sources: [
  //     {
  //       src: videoSource,
  //     },
  //   ],
  // });
  const VideoModal = () => {
    return (
      <VideoContainer>
        {/* <Plyr source={source} options={{}} /> */}
        <ReactPlayer
          onContextMenu={(e) => e.preventDefault()}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
                disablepictureinpicture: "true",
              },
            },
          }}
          controls={true}
          url={videoSource}
        />
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
