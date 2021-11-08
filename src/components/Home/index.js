import Achievements from "./Achievements";
import { Carousel } from "./Carousel";
import Hero from "./Hero";
import Information from "./Information";

const Home = () => {
  return (
    <>
      <Hero />
      <Carousel />
      <Achievements />
      <Information />
    </>
  );
};

export default Home;
