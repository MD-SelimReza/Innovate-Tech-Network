import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Services = () => {
  const [industrial, setIndustrial] = useState([]);
  useEffect(() => {
    fetch("/industrial.json")
      .then((res) => res.json())
      .then((data) => setIndustrial(data));
  }, []);

  return (
    <div className="text-black bg-white px-5 py-20">
      <Helmet>
        <title>InnovativeTechNetwork / Services</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div>
            <h1
              className="text-2xl font-bold mb-5 text-center"
              data-aos="fade-down"
            >
              Our Services
            </h1>
            <p className="mb-3" data-aos="fade-down">
              At InnovateTechNetwork, we offer a comprehensive range of services
              to meet your needs. From technology solutions and creative design
              to strategic consulting and community engagement, we provide
              tailored services to drive success for individuals and
              organizations alike.
            </p>
            <p data-aos="fade-down">
              Our services are designed with your success in mind. From
              innovative technology solutions to personalized consulting, we are
              dedicated to empowering you to thrive in today is dynamic
              landscape.
            </p>
            <Link
              to="/about"
              className="btn bg-[#FC8902] text-white border-none mt-5"
              data-aos="zoom-in-up"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="bg-[#FC8902] text-white lg:order-none md:order-last p-6 rounded-lg">
          <h1 className="text-3xl mb-5" data-aos="fade-left">
            Do You Need Any Help?
          </h1>
          <p className="mb-5" data-aos="fade-left" data-aos-delay="300">
            Here to assist you with any queries or tasks. Reach out for prompt
            and personalized support from our dedicated team at
            InnovateTechNetwork.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black px-9 rounded-md py-3"
            data-aos="flip-left"
          >
            Contact Now
          </Link>
        </div>
        {industrial.map((industry) => (
          <div key={industry.id} className="shadow-xl rounded-md bg-gray-200">
            <div>
              <img
                src={industry.image}
                alt=""
                className="w-full h-44 rounded-t-md"
                data-aos="flip-left"
              />
            </div>
            <div className="p-5 flex flex-col">
              <div>
                <h1 className="text-2xl font-bold mb-5" data-aos="fade-up">
                  {industry.estate_title}
                </h1>
                <h1
                  className="text-xl text-[#FC8902] font-bold mb-5"
                  data-aos="fade-up"
                >
                  {industry.price}
                </h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  {industry.description}
                </p>
              </div>
              <div className="flex-1">
                <Link
                  to={`/estate/${industry.id}`}
                  className="btn bg-[#FC8902] text-white border-none mt-5"
                  data-aos="zoom-in-up"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
