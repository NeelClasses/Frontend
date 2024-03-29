import React, { useState, useEffect } from "react";
import axios from "axios";
import "firebase/storage";
import { withRouter, Link } from "react-router-dom";
import {
  Alert,
  Button,
  Form as UploadForm,
  FormGroup,
  Input,
} from "reactstrap";
import AsyncSelect from "react-select/async";

const FormAddEdit = (props) => {
  const [status, setStatus] = useState("NotDone");

  //Form States
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseStream, setCourseStream] = useState("");
  const [courseBranch, setCourseBranch] = useState("");
  const [courseYear, setCourseYear] = useState("");
  const [courseRating, setCourseRating] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseField, setCourseField] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseInstructor, setCourseInstructor] = useState("");
  const [addForm, setAddForm] = useState(true);
  const [courseType, setCourseType] = useState("");

  useEffect(() => {
    if (props.course !== undefined) {
      setCourseName(props.course.courseName);
      setCourseStream(props.course.courseStream);
      setCourseBranch(props.course.courseBranch);
      setCourseYear(props.course.courseYear);
      setCourseRating(props.course.courseRating);
      setCoursePrice(props.course.coursePrice);
      setCourseId(props.course.courseId);
      setCourseField(props.course.courseField);
      setCourseDescription(props.course.courseDescription);
      setCourseInstructor(props.course.courseInstructor);
      setCourseType(props.course.courseType);
      setAddForm(false);
    } else {
      setCourseName("");
      setCourseStream("");
      setCourseBranch("");
      setCourseYear("");
      setCourseRating("");
      setCoursePrice("");
      setCourseId("");
      setCourseField("");
      setCourseDescription("");
      setCourseInstructor("");
      setAddForm(true);
      setCourseType("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getCourseStreamList = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
      setTimeout(() => {
        try {
          axios
            .get(`${process.env.REACT_APP_API_URL}/admin/course`)
            .then((res) => {
              const courseStreamList = [];
              res.data.CourseStreamList.forEach((stream) => {
                courseStreamList.push({
                  label: `${stream.courseStream}`,
                  value: stream.courseStream,
                });
              });
              callback(courseStreamList);
            });
        } catch (error) {}
      });
    }
  };

  const onStreamSelect = (selectedValue) => {
    if (selectedValue) {
      setCourseStream(selectedValue.value);
    }
  };

  const getCourseFieldList = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
      setTimeout(() => {
        try {
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/admin/course/${courseStream}`
            )
            .then((res) => {
              const courseFieldList = [];
              res.data.CourseFieldList.forEach((field) => {
                courseFieldList.push({
                  label: `${field.courseField}`,
                  value: field.courseField,
                });
              });
              callback(courseFieldList);
            });
        } catch (error) {}
      });
    }
  };

  const onFieldSelect = (selectedValue) => {
    if (selectedValue) {
      setCourseField(selectedValue.value);
    }
  };

  const getCourseBranchList = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
      setTimeout(() => {
        try {
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/admin/course/${courseStream}/${courseField}`
            )
            .then((res) => {
              const courseBranchList = [];
              res.data.CourseBranchList.forEach((branch) => {
                courseBranchList.push({
                  label: `${branch.courseBranch}`,
                  value: branch.courseBranch,
                });
              });
              callback(courseBranchList);
            });
        } catch (error) {}
      });
    }
  };

  const onBranchSelect = (selectedValue) => {
    if (selectedValue) {
      setCourseBranch(selectedValue.value);
    }
  };

  const getCourseYearList = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
      setTimeout(() => {
        try {
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/admin/course/${courseStream}/${courseField}/${courseBranch}`
            )
            .then((res) => {
              const courseYearList = [];
              res.data.CourseYearList.forEach((year) => {
                courseYearList.push({
                  label: `${year.courseYear}`,
                  value: year.courseYear,
                });
              });
              callback(courseYearList);
            });
        } catch (error) {}
      });
    }
  };

  const customStyles2 = {
    control: (base, state) => ({
      ...base,
      borderColor: "#fff",
      height: "61px",
      "&:hover": {
        border: "0px solid black",
        borderColor: "#fff",
        cursor: "pointer",
      },
    }),
  };

  const onYearSelect = (selectedValue) => {
    if (selectedValue) {
      setCourseYear(selectedValue.value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const CourseInfo = {
      courseName: courseName,
      courseStream: courseStream,
      courseField: courseField,
      courseBranch: courseBranch,
      courseYear: courseYear,
      courseRating: courseRating,
      coursePrice: coursePrice,
      courseDescription: courseDescription,
      courseInstructor: courseInstructor,
      courseType: courseType,
    };
    if (addForm) {
      try {
        await axios
          .post(`${process.env.REACT_APP_API_URL}/admin/addcourse`, CourseInfo)
          .then((res) => {
            setStatus(res.data);
          });
      } catch (error) {}
    } else {
      CourseInfo.courseId = courseId;
      try {
        await axios
          .put(`${process.env.REACT_APP_API_URL}/admin/editcourse`, CourseInfo)
          .then((res) => {
            setStatus(res.data);
          });
      } catch (error) {}
    }
  };
  if (status === "NotDone")
    return (
      <div className="container">
        <div className="header">Add Course</div>
        <UploadForm className="form-body">
          <FormGroup className="form-body-component">
            <Input
              type="text"
              className="course-name-field"
              name="courseName"
              placeholder="Course Name"
              value={courseName}
              onChange={(event) => setCourseName(event.target.value)}
              id="courseName"
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <AsyncSelect
              loadOptions={getCourseStreamList}
              placeholder="Select Stream"
              onChange={(e) => onStreamSelect(e)}
              defaultOptions={false}
              className="selector"
              styles={customStyles2}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <AsyncSelect
              loadOptions={getCourseFieldList}
              placeholder="Select Field"
              onChange={(e) => onFieldSelect(e)}
              defaultOptions={false}
              className="selector"
              styles={customStyles2}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <AsyncSelect
              loadOptions={getCourseBranchList}
              placeholder="Select Branch"
              onChange={(e) => onBranchSelect(e)}
              defaultOptions={false}
              className="selector"
              styles={customStyles2}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <AsyncSelect
              loadOptions={getCourseYearList}
              placeholder="Select Year"
              onChange={(e) => onYearSelect(e)}
              defaultOptions={false}
              className="selector"
              styles={customStyles2}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <Input
              type="text"
              className="course-rating-field"
              name="courseDescription"
              placeholder="Course Description"
              value={courseDescription}
              onChange={(event) => setCourseDescription(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <Input
              type="text"
              className="course-rating-field"
              name="courseInstructor"
              placeholder="Course Instructor"
              value={courseInstructor}
              onChange={(event) => setCourseInstructor(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <Input
              type="text"
              className="course-rating-field"
              name="courseRating"
              placeholder="Course Type"
              value={courseType}
              onChange={(event) => setCourseType(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <Input
              type="text"
              className="course-rating-field"
              name="courseRating"
              placeholder="Course Rating"
              value={courseRating}
              onChange={(event) => setCourseRating(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <Input
              type="text"
              className="course-price-field"
              name="coursePrice"
              placeholder="Course Price"
              value={coursePrice}
              onChange={(event) => setCoursePrice(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="form-body-component">
            <Button className="submit-btn" type="submit" onClick={onSubmit}>
              Submit
            </Button>
          </FormGroup>
        </UploadForm>
      </div>
    );
  else {
    return (
      <Alert color="primary">
        <p className="alert-text">Course Added Successfully</p>
        <Link to={`/course/${courseId}`}>View Course</Link>
      </Alert>
    );
  }
};

export default withRouter(FormAddEdit);
