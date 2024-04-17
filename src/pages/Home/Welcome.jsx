import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-10 my-20 px-5">
      <div className="lg:row-span-2 md:col-span-2 lg:col-span-1">
        <h1 className="text-3xl font-bold mb-8" data-aos="fade-down-right">
          Welcome to InnovateTechNetwork
        </h1>
        <p className="mb-4" data-aos="fade-down-right">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
          dignissimos dicta laborum mollitia cupiditate. Obcaecati ipsum ex
          accusantium omnis sint?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          fugit numquam, facere doloribus ducimus distinctio.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-5" data-aos="fade-down-right">
          Easy and Affordable
        </h1>
        <p className="mb-3" data-aos="fade-down-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          repellendus?
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          repellendus?
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          repellendus?
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          repellendus?
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
