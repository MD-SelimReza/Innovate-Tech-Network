import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div
      className="bg-[#FC8902] text-white p-6 rounded-lg"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-3xl mb-5" data-aos="fade-left">
        Do You Need Any Help?
      </h1>
      <p className="mb-5" data-aos="fade-left" data-aos-delay="300">
        Here to assist you with any queries or tasks. Reach out for prompt and
        personalized support from our dedicated team at InnovateTechNetwork.
      </p>
      <Link
        to="/contact"
        className="bg-white text-black px-9 rounded-md py-3"
        data-aos="flip-left"
      >
        Contact Now
      </Link>
    </div>
  );
};

export default Support;
