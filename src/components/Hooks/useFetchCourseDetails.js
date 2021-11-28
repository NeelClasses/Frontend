import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCourseDetails = (courseId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getCourses = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/course/${courseId}`,
        });
        setData(getCourses.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    console.count("This");
  }, [courseId]);
  return [data, error];
};

export default useFetchCourseDetails;
