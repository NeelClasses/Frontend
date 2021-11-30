import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCourses = (route, uid = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        switch (route) {
          case "/courses":
            const response = await axios({
              method: "GET",
              url: `${process.env.REACT_APP_API_URL}/courses`,
            });
            response.data && setLoading(false);
            response.data && setData(response.data.CourseInfoList);
            break;
          case "/my-courses":
            const getMyCourses = await axios({
              method: "POST",
              url: `${process.env.REACT_APP_API_URL}/mycourses`,
              data: {
                uid: uid,
              },
            });
            getMyCourses.data && setLoading(false);
            getMyCourses.data && setData(getMyCourses.data);
            break;
          default:
            break;
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [route, uid]);
  return [data, error, loading];
};

export default useFetchCourses;
