import Achievements from "./Achievements";
import { Carousel } from "./Carousel";
import Hero from "./Hero";
import Information from "./Information";
import Universities from "./Universities";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Universities />
      <Achievements />
      <Information />
    </>
  );
};

export default Home;
