import { Helmet } from "react-helmet-async";
import BannerSlide from "./BannerSlide";
import Estate from "./Estate";
import Project from "./Project";
import Support from "./Support";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to InnovativeTechNetwork</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>
        <BannerSlide />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <Estate />
      </div>
      <div className="my-20 px-5">
        <Support />
      </div>
      <div className="my-20 px-5">
        <Project />
      </div>
    </div>
  );
};

export default Home;
