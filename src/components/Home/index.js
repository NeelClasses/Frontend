import { useEffect } from "react";
import { Carousel } from "./Carousel";
import Hero from "./Hero";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log(userInfo);
    }, [3000]);
  }, []);
  return (
    <>
      <Hero />
      <Carousel />
    </>
  );
};

export default Home;
