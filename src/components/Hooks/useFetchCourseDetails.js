import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCourseDetails = (courseId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/course/${courseId}`,
        });
        response.data && setLoading(false);
        response.data && setData(response.data);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [courseId]);
  return [data, error, loading];
};

export default useFetchCourseDetails;
