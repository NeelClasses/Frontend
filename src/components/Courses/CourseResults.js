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
  TopSection,
} from "./styled";
import courseImg from "../../constants/Images/courseImage.jpg";
import CourseComponent from "./Course";
import useFetchCoursesByType from "../Hooks/useFetchCoursesByType";
import { CircularProgress, Pagination } from "@mui/material";
import { useLocation } from "react-router";

const CourseResults = () => {
  const [courses, setCourses] = useState([]),
    location = useLocation(),
    [apiUrl, setApiUrl] = useState(""),
    [data, error, loading] = useFetchCoursesByType(apiUrl),
    [activePage, setActivePage] = useState(1),
    [courseDisplay, setCourseDisplay] = useState([]),
    handlePageChange = (event, value) => {
      setActivePage(value);
      let indexOfLastCourse = value * 12;
      let indexOfFirstCourse = indexOfLastCourse - 12;
      setCourseDisplay(courses.slice(indexOfFirstCourse, indexOfLastCourse));
    };
  useEffect(() => {
    if (data?.length !== 0) {
      setCourses(data);
    }
    if (error) {
    }
  }, [data, error]);
  useEffect(() => {
    location.state.apiUrl !== "" && setApiUrl(location.state.apiUrl);
  }, [location.state.apiUrl]);
  useEffect(() => {
    if (courses?.length !== 0) {
      setCourseDisplay(courses?.slice(0, 12));
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
        {loading ? (
          <ProgressWrapper>
            <CircularProgress />
          </ProgressWrapper>
        ) : courses?.length > 0 ? (
          <>
            <TopSection>
              <CoursesHeading>Courses</CoursesHeading>
            </TopSection>
            <CourseGrid>
              {courseDisplay?.length !== 0 &&
                courseDisplay?.map((course) => (
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
            {courses && courseDisplay?.length !== 0 && (
              <PaginationWrapper>
                <Pagination
                  count={Math.ceil(courses.length / 12)}
                  page={activePage}
                  onChange={handlePageChange}
                />
              </PaginationWrapper>
            )}
          </>
        ) : (
          <ProgressWrapper>
            <h1>No Courses Found</h1>
          </ProgressWrapper>
        )}
      </Content>
    </CoursesWrapper>
  );
};

export default CourseResults;
