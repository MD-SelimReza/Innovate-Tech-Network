import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserBadge } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  return (
    <div className="bg-white px-5 py-24 text-black min-h-[calc(100vh-64px)]">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold mb-5 uppercase">Get in touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            praesentium atque id commodi minima et!
          </p>
          <div className="grid grid-cols-2 gap-10">
            <input
              type="text"
              name="Your Name"
              id=""
              placeholder="name"
              className="py-3 rounded-md px-2 bg-[#F7F7F7]"
            />
            <input
              type="tel"
              name="phone"
              id=""
              placeholder="Phone Number"
              className="py-3 rounded-md px-2 bg-[#F7F7F7]"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Your Email"
              className="py-3 rounded-md px-2 bg-[#F7F7F7]"
            />
            <input
              type="text"
              name="subject"
              id=""
              placeholder="Subject"
              className="py-3 rounded-md px-2 bg-[#F7F7F7]"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="bg-[#F7F7F7] p-3 rounded-md col-span-2"
            ></textarea>
          </div>
          <button className="btn bg-[#FC8902] text-white border-none mt-5">
            Send Now
          </button>
        </div>
        <div className="bg-[#FC8902] h-fit lg:flex-col md:flex-row flex gap-10 flex-col justify-between text-white p-10 rounded-lg">
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
      </div>
    </div>
  );
};

export default Contact;
