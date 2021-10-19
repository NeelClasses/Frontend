import { Content } from "../../../globalStyles";
import { Heading, Image1, Image2, ImageSection, ModalImage } from "./styled";
import Achievement1 from "../../../constants/Images/achievements1.jpg";
import Achievement2 from "../../../constants/Images/achievements2.jpg";
import { useEffect, useState } from "react";
import Modal from "../../Modal";

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false),
    [isZoom, setIsZoom] = useState(false),
    [OpenImg, setOpenImg] = useState("");
  const ImageComponent = () => {
    return (
      <ModalImage
        src={OpenImg}
        alt="Results"
        isZoom={isZoom}
        onClick={() => setIsZoom(!isZoom)}
      />
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("stopScroll");
    } else {
      document.body.classList.remove("stopScroll");
    }
  }, [isOpen]);
  return (
    <Content>
      <Heading>Our Achievements</Heading>
      <ImageSection>
        <Image1
          src={Achievement1}
          alt="Engineering Results"
          onClick={() => {
            setOpenImg(Achievement1);
            setIsOpen(true);
          }}
        />
        <Image2
          src={Achievement2}
          alt="Engineering and Diploma Results"
          onClick={() => {
            setOpenImg(Achievement2);
            setIsOpen(true);
          }}
        />
      </ImageSection>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          Component={ImageComponent}
          onClose={() => setIsOpen(!isOpen)}
        />
      )}
    </Content>
  );
};

export default Achievements;
