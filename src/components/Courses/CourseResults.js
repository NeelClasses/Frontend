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
  const location = useLocation(),
    [apiUrl, setApiUrl] = useState(""),
    [data, error, loading] = useFetchCoursesByType(apiUrl),
    [activePage, setActivePage] = useState(1),
    [courseDisplay, setCourseDisplay] = useState([]),
    handlePageChange = (event, value) => {
      setActivePage(value);
      let indexOfLastCourse = value * 12;
      let indexOfFirstCourse = indexOfLastCourse - 12;
      setCourseDisplay(data.slice(indexOfFirstCourse, indexOfLastCourse));
    };
  useEffect(() => {
    location.state.apiUrl !== "" && setApiUrl(location.state.apiUrl);
  }, [location.state.apiUrl]);
  useEffect(() => {
    if (data?.length !== 0) {
      setCourseDisplay(data?.slice(0, 12));
    }
  }, [data]);
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
        </TopSection>
        {loading ? (
          <ProgressWrapper>
            <CircularProgress />
          </ProgressWrapper>
        ) : (
          <>
            {data?.length > 0 ? (
              <>
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
                </CourseGrid>
                {data && courseDisplay?.length !== 0 && (
                  <PaginationWrapper>
                    <Pagination
                      count={Math.ceil(data.length / 12)}
                      page={activePage}
                      onChange={handlePageChange}
                    />
                  </PaginationWrapper>
                )}
              </>
            ) : (
              <ProgressWrapper>
                <p>No Courses Found</p>
              </ProgressWrapper>
            )}
            {error && (
              <ProgressWrapper>Something went wrong! try again</ProgressWrapper>
            )}
          </>
        )}
      </Content>
    </CoursesWrapper>
  );
};

export default CourseResults;
