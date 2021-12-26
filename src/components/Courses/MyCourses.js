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
import useFetchCourses from "../Hooks/useFetchCourses";
import { CircularProgress, Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import MyCourse from "./MyCourse";
const MyCourses = () => {
  const { userInfo } = useSelector((state) => state.userInfo),
    [data, , loading] = useFetchCourses("/my-courses", userInfo?.id),
    [activePage, setActivePage] = useState(1),
    [courseDisplay, setCourseDisplay] = useState([]),
    handlePageChange = (event, value) => {
      setActivePage(value);
      let indexOfLastCourse = value * 12;
      let indexOfFirstCourse = indexOfLastCourse - 12;
      setCourseDisplay(data.slice(indexOfFirstCourse, indexOfLastCourse));
    };
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
            <Heading>My Courses</Heading>
            <SubHeading>
              Pick a course to get started at <span>Neel Classes</span>
            </SubHeading>
          </ContentTextSection>
        </Content>
      </TitleSection>
      <Content>
        <TopSection>
          <CoursesHeading>My Courses</CoursesHeading>
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
                      <MyCourse
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
          </>
        )}
      </Content>
    </CoursesWrapper>
  );
};

export default MyCourses;
