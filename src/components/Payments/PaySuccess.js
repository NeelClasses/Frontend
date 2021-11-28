import React, { useEffect } from "react";
import axios from "axios";

import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "../../store/actions";
const PaySuccess = (props) => {
  const dispatch = useDispatch(),
    removeCourseFn = () => {
      dispatch(removeCourse());
    },
    { course } = useSelector((state) => state.course),
    { userInfo } = useSelector((state) => state.userInfo);
  useEffect(() => {
    callEnroll(
      userInfo.uid,
      course.courseId,
      course.coursePrice,
      removeCourseFn
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course.courseId, course.coursePrice, removeCourseFn, userInfo.uid]);

  async function callEnroll(uid, cid, cost, removeCourseFn) {
    const pcost = props.match.params.courseCost;
    const orderId = props.match.params.orderId;
    const txnId = props.match.params.txnId;
    if (pcost + ".00" === cost || pcost === cost) {
      const Info = {
        uid: uid,
        courseId: cid,
        orderId: orderId,
        txnId: txnId,
      };
      await axios
        .post("https://neelclasses.herokuapp.com/enrollCourse", Info)
        .then((res) => {
          console.log(res);
          if (res.data === "Done") {
            alert("Course Enrolled Successfully");
            removeCourseFn();
            props.history.push(`/course/${cid}`);
          }
        });
    } else {
      alert("Something went wrong.");
    }
  }
  return (
    <div>
      <h1>Your payment is successful....wait for a moment</h1>
    </div>
  );
};

export default withRouter(PaySuccess);
