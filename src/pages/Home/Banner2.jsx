import { Link } from "react-router-dom";
import banner2 from "../../assets/banner-img2.jpg";

const Banner2 = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-70px)]"
        style={{
          backgroundImage: "url(" + banner2 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              We are <span className="text-[#FC8902]">InnovateTechNetwork</span>
            </h1>
            <p className="mb-5" data-aos="fade-right" data-aos-delay="1000">
              Our website is more than just a collection of pages; it is a
              dynamic hub of knowledge, creativity, and collaboration. Here, you
              will find a treasure trove of resources designed to ignite your
              passion, spark your curiosity, and propel you toward your goals.
            </p>
            <div data-aos="fade-right" data-aos-delay="1500">
              <Link to="/about" className="btn btn-primary">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
