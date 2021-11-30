import axios from "axios";
import { useEffect, useState } from "react";

const useFetchCoursesByType = (apiUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/${apiUrl}`,
        });
        setData(response.data.courses);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [apiUrl]);
  return [data, error];
};

export default useFetchCoursesByType;
