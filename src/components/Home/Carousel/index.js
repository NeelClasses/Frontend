import { CarouselItem, SliderWrapper } from "./styled";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import CourseComponent from "../../Courses/Course";
import courseImg from "../../../constants/Images/courseImage.jpg";
import useFetchCourses from "../../Hooks/useFetchCourses";
import { Section } from "../../../globalStyles";
import { Heading } from "../Achievements/styled";

export const Carousel = () => {
  const popularCourses = [
      "oADp2HHdobKpLFY2Q0fy",
      "GAsKd8ESK4QLvXEJqJ0y",
      "T1mGWNFOavFKT6NS5q9J",
      "qGRIPWnpF5eFqNk6He0u",
      "1gAROP0s70ljSRW9bkv7",
      "t73UpvWhYZl0mXT02r9w",
      "7ZBgl9vbpnb6r7uhWOjn",
      "F3nWAWzg2ClVLsewDtrB",
      "pqOjx3z3bT4Hv4GhYKAY",
      "2Vxn44jPLPxLQgujrTE3",
      "05TYcUWJPMlxpR8Avswk",
      "RjaRxFnMEmFip2MgBNEI",
      "TpJcPlPUnyIc0zJuipqX",
    ],
    [data] = useFetchCourses("");
  return (
    <Section>
      <SliderWrapper>
        <Heading id="recognitions">Popular Courses</Heading>
        <OwlCarousel
          nav={true}
          items={2}
          navText={[
            '<span class="prev">&lt;</span>',
            '<span class="next">&gt;</span>',
          ]}
          loop={true}
          responsive={{
            0: {
              items: 1,
            },
            1000: {
              items: 2,
            },
          }}
        >
          {data && data.length !== 0
            ? data.map((course, index) => {
                if (popularCourses.includes(course.courseId)) {
                  return (
                    <CarouselItem>
                      <CourseComponent
                        key={index}
                        courseImage={courseImg}
                        courseTitle={course?.courseName}
                        coursePrice={course?.coursePrice}
                      />
                    </CarouselItem>
                  );
                }
                return "";
              })
            : ""}
        </OwlCarousel>
      </SliderWrapper>
    </Section>
  );
};
