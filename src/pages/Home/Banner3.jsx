import { Link } from "react-router-dom";
import banner3 from "../../assets/banner-img3.jpg";

const Banner3 = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-70px)]"
        style={{
          backgroundImage: "url(" + banner3 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Take Solution with{" "}
              <span className="text-[#FC8902]">InnovateTechNetwork</span>
            </h1>
            <p className="mb-5" data-aos="fade-up" data-aos-delay="1000">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div data-aos="fade-up" data-aos-delay="1500">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
