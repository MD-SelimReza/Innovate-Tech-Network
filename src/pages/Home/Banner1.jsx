import { Link } from "react-router-dom";
import banner1 from "../../assets/banner-img1.jpg";

const Banner1 = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-70px)]"
        style={{
          backgroundImage: "url(" + banner1 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Welcome to{" "}
              <span className="text-[#FC8902]">InnovateTechNetwork</span>
            </h1>
            <p className="mb-5" data-aos="fade-left" data-aos-delay="1000">
              Welcome to our digital home, where creativity thrives, and
              innovation knows no bounds. We are thrilled to extend a warm
              invitation to explore our virtual space, where ideas come to life
              and possibilities are endless.
            </p>
            <div data-aos="fade-left" data-aos-delay="1500">
              <Link to="/services" className="btn btn-primary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
