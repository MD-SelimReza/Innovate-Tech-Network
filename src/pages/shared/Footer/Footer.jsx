import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 p-10 text-base-content bg-[#050709]">
        <nav className="flex flex-col gap-5 text-center lg:text-left md:text-left col-span-2 md:col-span-2 lg:col-span-1">
          <h6 className="footer-title normal-case text-xl text-[#FC8902] opacity-100">
            InnovateTechNetwork
          </h6>
          <p className="text-white opacity-60">
            Explore the latest in tech trends and innovations at
            InnovateTechNetwork. Stay informed and inspired with our curated
            content and expert insights.
          </p>
          <p className="footer-title text-[#FFFFFF] opacity-100">Follow Us</p>
          <div className="flex lg:justify-normal md:justify-normal justify-center gap-5">
            <p className="rounded-full p-2 bg-[#1877F2] text-white hover:text-[#1877F2] hover:bg-white">
              <FaFacebookF className="" />
            </p>
            <p className="rounded-full p-2 bg-[#FF0000] text-white hover:text-[#FF0000] hover:bg-white">
              <FaYoutube className="" />
            </p>
            <p className="rounded-full p-2 bg-[#cd486b] text-white hover:text-[#cd486b] hover:bg-white">
              <FaInstagram className="" />
            </p>
            <p className="rounded-full p-2 bg-[#1DA1F2] text-white hover:text-[#1DA1F2] hover:bg-white">
              <FaXTwitter className="" />
            </p>
          </div>
        </nav>
        <nav className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
          <h6 className="footer-title text-[#FFFFFF] opacity-100">
            Useful Links
          </h6>
          <Link
            to="/"
            className="link link-hover text-white hover:text-[#FC8902] focus:text-[#FC8902] focus:opacity-100 opacity-60"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="link link-hover text-white hover:text-[#FC8902] focus:text-[#FC8902] focus:opacity-100 opacity-60"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="link link-hover text-white hover:text-[#FC8902] focus:text-[#FC8902] focus:opacity-100 opacity-60"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="link link-hover text-white hover:text-[#FC8902] focus:text-[#FC8902] focus:opacity-100 opacity-60"
          >
            Our Services
          </Link>
          <Link
            to="/terms-condition"
            className="link link-hover text-white hover:text-[#FC8902] focus:text-[#FC8902] focus:opacity-100 opacity-60"
          >
            Terms and Conditions
          </Link>
        </nav>
        <nav className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
          <h6 className="footer-title text-[#FFFFFF] opacity-100">
            Contact Info
          </h6>
          <p className="text-white opacity-60">
            1234, Time Square, New York, United States.
          </p>
          <p className="text-white opacity-60">( 123) 456 -7890</p>
          <Link
            to="/contact"
            className="link link-hover text-white opacity-60 hover:text-[#FC8902] focus:text-[#FC8902] focus:opacity-100"
          >
            info@innovate.com
          </Link>
          <p className="text-white opacity-60">Mon-Fri: 9am to 5pm</p>
        </nav>
        <form className="col-span-2 md:col-span-2 lg:col-span-1 text-center lg:text-left md:text-left">
          <h6 className="footer-title text-[#FFFFFF] opacity-100 mb-4">
            SUBSCRIBE
          </h6>
          <p className="text-white opacity-60 mb-2">
            Get subscriber only insights & news delivered by InnovateTechNetwork
          </p>
          <fieldset className="form-control">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
              />
              <button className="btn btn-primary bg-[#FC8902] border-none">
                Go
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <hr />
      <p className="text-center py-8">
        Copyrights &copy; 2024{" "}
        <span className="text-[#FC8902] opacity-100">InnovateTechNetwork</span>.
      </p>
    </footer>
  );
};

export default Footer;
