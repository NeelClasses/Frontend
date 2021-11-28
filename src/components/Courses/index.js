import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
  PaginationWrapper,
  ProgressWrapper,
  SearchBar,
  SearchBarWrapper,
  SubmitButton,
  TopSection,
} from "./styled";
import courseImg from "../../constants/Images/courseImage.jpg";
import CourseComponent from "./Course";
import useFetchCourses from "../Hooks/useFetchCourses";
import { CircularProgress, Pagination } from "@mui/material";
const Courses = () => {
  const [searchInput, setSearchInput] = useState(""),
    [courses, setCourses] = useState([]),
    [data, error] = useFetchCourses(""),
    [activePage, setActivePage] = useState(1),
    [courseDisplay, setCourseDisplay] = useState([]),
    handleSearch = (e) => {
      e.preventDefault();
      if (searchInput !== "") {
        const results = courses.filter((course) =>
          course.courseName.toLowerCase().includes(searchInput.toLowerCase())
        );
        if (results.length !== 0) {
          setCourseDisplay(results);
        }
      }
    },
    handlePageChange = (event, value) => {
      setActivePage(value);
      let indexOfLastCourse = value * 12;
      let indexOfFirstCourse = indexOfLastCourse - 12;
      setCourseDisplay(courses.slice(indexOfFirstCourse, indexOfLastCourse));
    };
  useEffect(() => {
    if (data.length !== 0) {
      setCourses(data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);
  useEffect(() => {
    if (courses.length !== 0) {
      setCourseDisplay(courses.slice(0, 12));
    }
  }, [courses]);
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
          <form onSubmit={handleSearch}>
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
          {courseDisplay.length !== 0 &&
            courseDisplay.map((course) => (
              <CourseComponent
                key={course.courseId}
                courseImage={courseImg}
                courseTitle={course.courseName}
                coursePrice={course.coursePrice}
                courseId={course.courseId}
              />
            ))}
          {/* {error && <p>Something went wrong.</p>} */}
        </CourseGrid>
        {courses.length === 0 && (
          <ProgressWrapper>
            <CircularProgress />
          </ProgressWrapper>
        )}
        {courseDisplay.length !== 0 && (
          <PaginationWrapper>
            <Pagination
              count={Math.ceil(courses.length / 12)}
              page={activePage}
              onChange={handlePageChange}
            />
          </PaginationWrapper>
        )}
      </Content>
    </CoursesWrapper>
  );
};

export default Courses;
