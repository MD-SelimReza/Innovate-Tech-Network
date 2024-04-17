import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 my-20 px-5">
      <div className="lg:row-span-2 md:col-span-2 lg:col-span-1">
        <h1 className="text-3xl font-bold mb-8" data-aos="fade-down-right">
          Welcome to <span className="text-[#FC8902]">InnovateTechNetwork</span>
        </h1>
        <p className="mb-4" data-aos="fade-down-right">
          Welcome to our digital home, where creativity thrives, and innovation
          knows no bounds. We are thrilled to extend a warm invitation to
          explore our virtual space, where ideas come to life and possibilities
          are endless.
        </p>
        <p>
          At InnovateTechNetwork, we believe in the power of imagination to
          shape the world around us. Whether you are a seasoned professional, an
          aspiring entrepreneur, or simply a curious mind eager for inspiration,
          you have come to the right place.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5" data-aos="fade-down-right">
          Easy and Affordable
        </h1>
        <p className="mb-3" data-aos="fade-down-right">
          where simplicity meets affordability, and access to valuable resources
          is just a click away. We are delighted to extend a warm invitation to
          explore our online space, where convenience and value go hand in hand.
        </p>
        <Link
          to="/services"
          className="text-[#FC8902]"
          data-aos="fade-down-right"
        >
          Read more
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5" data-aos="fade-down-right">
          Punctual Delivery time
        </h1>
        <p className="mb-3" data-aos="fade-down-right">
          where punctual delivery is not just a commitment; it is our unwavering
          promise to you. We are thrilled to extend a warm welcome to our
          digital space, where efficiency and timeliness reign supreme.
        </p>
        <Link
          to="/services"
          className="text-[#FC8902]"
          data-aos="fade-down-right"
        >
          Read more
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5" data-aos="fade-down-right">
          Smart Technology
        </h1>
        <p className="mb-3" data-aos="fade-down-right">
          we are passionate about harnessing the power of smart technology to
          create smarter solutions for today is challenges. Whether you are a
          tech enthusiast, a business looking to streamline operations, or a
          homeowner seeking to upgrade your living space, you have come to the
          right place.
        </p>
        <Link
          to="/services"
          className="text-[#FC8902]"
          data-aos="fade-down-right"
        >
          Read more
        </Link>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5" data-aos="fade-down-right">
          Team Of Professionals
        </h1>
        <p className="mb-3" data-aos="fade-down-right">
          where a dedicated team of professionals stands ready to serve your
          needs with expertise and excellence. We are delighted to extend a warm
          welcome to our online platform, where professionalism is not just a
          value; it is our guiding principle.
        </p>
        <Link
          to="/services"
          className="text-[#FC8902]"
          data-aos="fade-down-right"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
