import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { withRouter } from "react-router-dom";
const PayFailed = (props) => {
  const { course } = useSelector((state) => state.course);
  useEffect(() => {
    callfail(course.courseId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function callfail(cid) {
    alert("Payment failed, Please try after some time.");
    props.history.push(`/course/${cid}`);
  }
  return (
    <div>
      <h1>Payment Failed...</h1>
    </div>
  );
};
export default withRouter(PayFailed);
