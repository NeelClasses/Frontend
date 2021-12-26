import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PayFailed = () => {
  const history = useHistory();
  useEffect(() => {
    const courseId = JSON.parse(localStorage.getItem("courseInfo")).courseId;
    alert("Payment failed, Please try after some time.");
    history.push(`/course/${courseId}`);
  }, [history]);

  return (
    <div>
      <h1>Payment Failed...</h1>
    </div>
  );
};
export default PayFailed;
