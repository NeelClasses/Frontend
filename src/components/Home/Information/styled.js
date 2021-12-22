import styled from "styled-components";
import { Heading, Image2, ImageSection } from "../Achievements/styled";

export const Images = styled(ImageSection)`
  gap: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled(Image2)`
  margin-bottom: 2rem;
  @media only screen and (max-width: 512px) {
    margin-bottom: 0;
  }
`;

export const Title = styled(Heading)`
  margin-top: 2rem;
`;
