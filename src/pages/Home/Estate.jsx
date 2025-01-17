import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Estate = () => {
  const [industrial, setIndustrial] = useState([]);
  useEffect(() => {
    fetch("/industrial.json")
      .then((res) => res.json())
      .then((data) => setIndustrial(data));
  }, []);

  return (
    <div className="text-black bg-white px-5 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl font-bold mb-5" data-aos="fade-down">
            What We Do
          </h1>
          <p className="mb-3" data-aos="fade-down">
            Welcome to our digital platform, where innovation meets action, and
            possibilities are transformed into reality. We are excited to
            introduce you to our diverse range of services and solutions,
            designed to address your needs and exceed your expectations.
          </p>
          <p data-aos="fade-down">
            At InnovateTechNetwork, we are passionate about making a difference
            through what we do. From cutting-edge technology to creative
            solutions, our mission is to empower individuals and organizations
            to thrive in an ever-evolving world.
          </p>
          <Link
            to="/services"
            className="btn mt-5 bg-[#FC8902] text-white px-8 py-3 border-none rounded-md"
            data-aos="zoom-in-up"
          >
            View All Properties
          </Link>
        </div>
        {industrial.slice(0, 5).map((industry) => (
          <div key={industry.id}>
            <div>
              <img
                src={industry.image}
                alt=""
                className="w-full h-44"
                data-aos="flip-left"
              />
            </div>
            <h1 className="text-2xl font-bold my-5" data-aos="fade-up">
              {industry.estate_title}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {industry.description}
            </p>
            <Link
              to={`/estate/${industry.id}`}
              className="btn bg-[#FC8902] text-white border-none mt-5"
              data-aos="zoom-in-up"
            >
              View Property
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estate;
