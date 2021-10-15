import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Content } from "../../globalStyles";
import {
  ContentTextSection,
  SubHeading,
  TitleSection,
  Heading,
} from "../AboutUs/styled";
import {
  CourseGrid,
  CoursesHeading,
  CoursesWrapper,
  SearchBar,
  SearchBarWrapper,
  SubmitButton,
  TopSection,
} from "./styled";
import courseImg from "../../constants/Images/courseImage.jpg";
import CourseComponent from "./Course";
const Courses = () => {
  const [searchInput, setSearchInput] = useState(""),
    handleSubmit = () => {
      if (searchInput) {
        alert("Searching");
      }
    };
  return (
    <CoursesWrapper>
      <TitleSection>
        <Content>
          <ContentTextSection>
            <Heading>Courses</Heading>
            <SubHeading>
              Pick a course to get started at <span>Neel Classes</span>
            </SubHeading>
          </ContentTextSection>
        </Content>
      </TitleSection>
      <Content>
        <TopSection>
          <CoursesHeading>Courses</CoursesHeading>
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
        </TopSection>
        <CourseGrid>
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
        </CourseGrid>
      </Content>
    </CoursesWrapper>
  );
};

export default Courses;
