import { Helmet } from "react-helmet-async";
import { BiSolidUserBadge } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const property = properties.find((property) => property.id === idInt);
  const {
    estate_title,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = property;
  return (
    <div className="flex gap-5 lg:flex-row flex-col text-black bg-white px-5 py-20">
      <Helmet>
        <title>InnovativeTechNetwork / Estate Details</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="rounded-md w-full lg:w-3/4 bg-gray-200">
        <div className="relative">
          <img src={image} alt="" className="w-full rounded-t-md" />
          <span className="absolute top-5 right-5 text-white bg-[#FC8902] px-1 rounded-sm">
            {status}
          </span>
          <span className="absolute bottom-5 inline-flex gap-2 items-center right-5 text-white">
            <FaLocationDot className="text-[#FC8902] size-5" />
            <span>{location}</span>
          </span>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-5">{estate_title}</h1>
          <h1 className="text-xl  font-bold mb-5">
            <span>Salary: </span>
            <span className="text-[#FC8902]">{price}</span>
          </h1>
          <p>{description}</p>
          <div className="mt-5">
            <span className="font-bold mr-4">Facilities:</span>
            {facilities.map((facility, idx) => (
              <span
                key={idx}
                className="mr-10 bg-[#FC8902] font-medium py-1 px-3 rounded-md text-white"
              >
                {facility}
              </span>
            ))}
          </div>
          <p className="text-xl inline-flex gap-3 items-center text-[#FC8902] font-bold mt-5">
            <BsArrowsFullscreen className="size-5 text-black font-bold" />
            <span>{area}</span>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 w-full flex flex-col gap-5">
        <div className="bg-[#FC8902] h-fit lg:flex-col md:flex-row flex gap-5 flex-col justify-between text-white p-5 rounded-lg">
          <div className="flex gap-5">
            <div className="bg-white size-12 text-[#FC8902] hover:text-black rounded-full">
              <FaLocationDot className="size-12 p-2" />
            </div>
            <div>
              <h1 className="text-2xl mb-5 uppercase">Visit Us</h1>
              <p className="mb-5">123 Main Street, Cityville, State, ZIP</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white size-12 text-[#FC8902] hover:text-black rounded-full">
              <BiSolidUserBadge className="size-12 p-2" />
            </div>
            <div>
              <h1 className="text-2xl mb-5 uppercase">Call Us</h1>
              <p className="mb-5">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-white size-12 text-[#FC8902] hover:text-black rounded-full">
              <HiOutlineMail className="size-12 p-2" />
            </div>
            <div>
              <h1 className="text-2xl mb-5 uppercase">Mail Us</h1>
              <p className="mb-5">info@innovate.com</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FC8902] text-white p-6 rounded-lg">
          <h1 className="text-3xl mb-5">Do You Need Any Help?</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ad.
          </p>
          <button className="bg-white text-[#FC8902] opacity-100 px-9 rounded-md py-3">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
