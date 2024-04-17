import { Helmet } from "react-helmet-async";
import banner1 from "../../assets/banner-img1.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>InnovativeTechNetwork / About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex lg:flex-row flex-col-reverse py-20 gap-10 items-center px-5 bg-white text-black min-h-[calc(100vh-64px)]">
        <div className="lg:w-1/2 w-full">
          <h1
            className="text-3xl font-bold mb-5 lg:flex hidden"
            data-aos="fade-right"
          >
            We are{" "}
            <span className="text-[#FC8902]"> InnovativeTechNetwork</span>
          </h1>
          <p className="mb-3" data-aos="fade-right">
            Welcome to our digital platform, where innovation meets action, and
            possibilities are transformed into reality. We are excited to
            introduce you to our diverse range of services and solutions,
            designed to address your needs and exceed your expectations.
          </p>
          <p className="mb-3" data-aos="fade-right">
            At InnovateTechNetwork, we are passionate about making a difference
            through what we do. From cutting-edge technology to creative
            solutions, our mission is to empower individuals and organizations
            to thrive in an ever-evolving world.
          </p>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="py-3 px-8 rounded-md bg-[#FC8902] text-white border-none mt-5"
              data-aos="zoom-in-up"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h1
            className="text-3xl text-center font-bold mb-5 lg:hidden"
            data-aos="fade-right"
          >
            We are <span className="text-[#FC8902]">InnovativeTechNetwork</span>
          </h1>
          <img src={banner1} alt="" className="mx-auto" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default About;
