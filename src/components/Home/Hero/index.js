import {
  Heading,
  HeroWrapper,
  SubText,
  TextSection,
  TopText,
  TextWrapper,
  SearchBarWrapper,
  SearchBar,
  SubmitButton,
} from "./styled";
import { Content } from "../../../globalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hero = () => {
  const [searchInput, setSearchInput] = useState(""),
    handleSubmit = () => {
      if (searchInput) {
        alert("Searching");
      }
    };
  return (
    <HeroWrapper>
      <Content>
        <TextWrapper>
          <TextSection>
            <TopText>Welcome to Neel Classes</TopText>
            <Heading>A New Way to Learn With Us</Heading>
            <SubText>
              Lorem ipsum dol sit amet Lorem ipsum dol sit amet Lorem ipsum dol
              sit amet Lorem ipsum dol sit amet Lorem ipsum dol sit amet Lorem
              ipsum dol sit amet Lorem ipsum dol sit amet
            </SubText>
            <form onSubmit={handleSubmit}>
              <SearchBarWrapper>
                <SearchBar
                  type="text"
                  placeholder="Search for anything"
                  id="searchBar"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <SubmitButton type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </SubmitButton>
              </SearchBarWrapper>
            </form>
          </TextSection>
        </TextWrapper>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
