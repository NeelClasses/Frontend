import { Content, Section } from "../../../globalStyles";
import { Heading, ModalImage } from "../Achievements/styled";
import Information1 from "../../../constants/Images/Information1.jpg";
import Information2 from "../../../constants/Images/Information2.jpg";
import { useEffect, useState } from "react";
import Modal from "../../Modal";
import { Image, Images } from "./styled";

const Information = () => {
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
    <Section>
      <Content>
        <Heading>Information</Heading>
        <Images>
          <Image
            src={Information1}
            alt="Engineering Results"
            onClick={() => {
              setOpenImg(Information1);
              setIsOpen(true);
            }}
          />
          <Image
            src={Information2}
            alt="Engineering and Diploma Results"
            onClick={() => {
              setOpenImg(Information2);
              setIsOpen(true);
            }}
          />
        </Images>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            Component={ImageComponent}
            onClose={() => setIsOpen(!isOpen)}
          />
        )}
      </Content>
    </Section>
  );
};

export default Information;
