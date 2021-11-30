import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCourses = (route, uid = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        switch (route) {
          case "/courses":
            const getCourses = await axios({
              method: "GET",
              url: `${process.env.REACT_APP_API_URL}/courses`,
            });
            setData(getCourses.data.CourseInfoList);
            break;
          case "/my-courses":
            const getMyCourses = await axios({
              method: "POST",
              url: `${process.env.REACT_APP_API_URL}/mycourses`,
              data: {
                uid: uid,
              },
            });
            setData(getMyCourses.data);
            break;
          default:
            break;
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [route]);
  return [data, error];
};

export default useFetchCourses;
