import { Button } from "@mui/material";
import { Course, Details, Image, Price, Title } from "./styled";

const CourseComponent = (props) => {
  return (
    <Course>
      <Image src={props.courseImage} alt="course Image" />
      <Details>
        <Title>{props.courseTitle}</Title>
        <Price>&#8377;{props.coursePrice}</Price>
        <Button fullWidth variant="contained">
          Enroll Now
        </Button>
      </Details>
    </Course>
  );
};

export default CourseComponent;
