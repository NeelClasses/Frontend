import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { Course, Details, Image, Title } from "./styled";

const MyCourse = (props) => {
  const history = useHistory(),
    handleClick = () => {
      history.push(`/course/${props.courseId}`);
    };
  return (
    <Course>
      <Image src={props.courseImage} alt="course Image" />
      <Details>
        <Title>{props.courseTitle}</Title>
        <Button fullWidth variant="contained" onClick={handleClick}>
          View Course
        </Button>
      </Details>
    </Course>
  );
};

export default MyCourse;
