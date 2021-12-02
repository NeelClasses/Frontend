import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCoursesByType = (apiUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setError({});
    setData([]);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/${apiUrl}`,
        });
        response.data && setLoading(false);
        response.data && setData(response.data.courses);
      } catch (error) {
        setLoading(false);
        setError(error);
        setData([]);
      }
    };
    fetchData();
  }, [apiUrl]);
  return [data, error, loading];
};

export default useFetchCoursesByType;
