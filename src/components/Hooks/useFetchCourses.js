import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCourses = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCourses = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/courses`,
        });
        setData(getCourses.data.CourseInfoList);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return [data, error];
};

export default useFetchCourses;
