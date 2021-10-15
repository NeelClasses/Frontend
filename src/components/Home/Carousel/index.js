import { CarouselItem, SliderHeading, SliderWrapper } from "./styled";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import CourseComponent from "../../Courses/Course";
import courseImg from "../../../constants/Images/courseImage.jpg";

export const Carousel = () => {
  return (
    <SliderWrapper>
      <SliderHeading id="recognitions">Top Courses</SliderHeading>
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
        <CarouselItem>
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
        </CarouselItem>
        <CarouselItem>
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
        </CarouselItem>
        <CarouselItem>
          <CourseComponent
            courseImage={courseImg}
            courseTitle="General Theory of Relativity"
            coursePrice="300"
          />
        </CarouselItem>
      </OwlCarousel>
    </SliderWrapper>
  );
};
