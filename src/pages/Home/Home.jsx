import BannerSlide from "./BannerSlide";
import Estate from "./Estate";
import Support from "./Support";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
