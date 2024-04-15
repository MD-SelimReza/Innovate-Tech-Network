import { useEffect, useState } from "react";

const Services = () => {
  const [industrial, setIndustrial] = useState([]);
  useEffect(() => {
    fetch("/industrial.json")
      .then((res) => res.json())
      .then((data) => setIndustrial(data));
  }, []);

  console.log(industrial);
  return (
    <div className="text-black bg-white px-5 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div>
            <h1
              className="text-2xl font-bold mb-5 text-center"
              data-aos="fade-down"
            >
              What We Do
            </h1>
            <p className="mb-3" data-aos="fade-down">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              culpa dolorum tempore quaerat adipisci repellendus id officiis,
              hic, magnam quidem iusto numquam eveniet minus vel.
            </p>
            <p data-aos="fade-down">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              perspiciatis at itaque amet magnam. Atque quaerat vel labore
              mollitia quod?
            </p>
            <button
              className="btn bg-[#FC8902] text-white border-none mt-5"
              data-aos="zoom-in-up"
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="bg-[#FC8902] text-white lg:order-none md:order-last p-6 rounded-lg">
          <h1 className="text-3xl mb-5" data-aos="fade-left">
            Do You Need Any Help?
          </h1>
          <p className="mb-5" data-aos="fade-left" data-aos-delay="300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ad.
          </p>
          <button
            className="bg-white text-black px-9 rounded-md py-3"
            data-aos="flip-left"
          >
            Contact Now
          </button>
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
                <button
                  className="py-3 w-full rounded-lg px-8 bg-[#FC8902] text-center text-white border-none mt-5"
                  data-aos="zoom-in-up"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
