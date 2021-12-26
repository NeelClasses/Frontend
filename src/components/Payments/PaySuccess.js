import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../../store/actions";
import { Content } from "../../globalStyles";
import { ProgressWrapper } from "../Courses/styled";
import { CircularProgress } from "@mui/material";

const PaySuccess = (props) => {
  const dispatch = useDispatch(),
    { userInfo } = useSelector((state) => state.userInfo);
  const courseInfo = JSON.parse(localStorage.getItem("courseInfo"));

  useEffect(() => {
    callEnroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const callEnroll = async () => {
    const pcost = props.match.params.courseCost;
    const orderId = props.match.params.orderId;
    const txnId = props.match.params.txnId;
    if (
      pcost + ".00" === courseInfo.coursePrice ||
      pcost === courseInfo.coursePrice
    ) {
      const Info = {
        uid: userInfo.id,
        courseId: courseInfo.courseId,
        orderId: orderId,
        txnId: txnId,
      };
      await axios
        .post(`${process.env.REACT_APP_API_URL}/enrollCourse`, Info)
        .then((res) => {
          if (res.data === "Done") {
            alert("Course Enrolled Successfully");
            dispatch(removeCourse());
            props.history.push(`/course/${courseInfo.courseId}`);
          }
        });
    } else {
      alert("Something went wrong.");
    }
  };
  return (
    <>
      <Content>
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      </Content>
    </>
  );
};

export default PaySuccess;
