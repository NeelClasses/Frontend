import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { Course, Details, Image, Price, Title } from "./styled";

const CourseComponent = (props) => {
  const history = useHistory(),
    handleClick = () => {
      history.push(`/course/${props.courseId}`);
    };
  return (
    <Course>
      <Image src={props.courseImage} alt="course Image" />
      <Details>
        <Title>{props.courseTitle}</Title>
        <Price>&#8377;{props.coursePrice}</Price>
        <Button fullWidth variant="contained" onClick={handleClick}>
          Enroll Now
        </Button>
      </Details>
    </Course>
  );
};

export default CourseComponent;
