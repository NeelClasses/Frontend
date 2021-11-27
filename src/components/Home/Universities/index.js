import { Content, Section } from "../../../globalStyles";
import AKTU from "../../../constants/Images/AKTU.jpg";
import GTU from "../../../constants/Images/GTU.jpg";
import MU from "../../../constants/Images/MU.jpg";
import RTU from "../../../constants/Images/RTU.jpg";
import SPPU from "../../../constants/Images/SPPU.png";
import SANDEEPU from "../../../constants/Images/SANDEEPU.png";
import MSBTE from "../../../constants/Images/MSBTE.png";
import { Img, Name, Tile, TileSection } from "./styled";
import { Heading } from "../Achievements/styled";
const Universities = () => {
  return (
    <Section>
      <Content>
        <Heading>
          Get All Courses and Study Material For Your University!
        </Heading>
        <TileSection>
          <Tile>
            <Img src={AKTU} alt="AKTU Logo" />
            <Name>Abdul Kalam Technical University</Name>
          </Tile>
          <Tile>
            <Img src={GTU} alt="GTU Logo" />
            <Name>Gujarat Technical University</Name>
          </Tile>
          <Tile>
            <Img src={MU} alt="MU Logo" />
            <Name>Mumbai University</Name>
          </Tile>
          <Tile>
            <Img src={RTU} alt="RTU Logo" />
            <Name>Rajasthan Technical University</Name>
          </Tile>
          <Tile>
            <Img src={SPPU} alt="SPPU Logo" />
            <Name>Savitribai Phule Pune University</Name>
          </Tile>
          <Tile>
            <Img src={SANDEEPU} alt="SANDEEP University Logo" />
            <Name>Sandeep University</Name>
          </Tile>
          <Tile>
            <Img src={MSBTE} alt="MSBTE Logo" />
            <Name>MSBTE</Name>
          </Tile>
        </TileSection>
      </Content>
    </Section>
  );
};

export default Universities;
