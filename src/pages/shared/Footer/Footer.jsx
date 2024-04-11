const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10 p-10 text-base-content bg-[#050709]">
      <nav className="flex flex-col gap-5 text-center lg:text-left md:text-left col-span-2 md:col-span-2 lg:col-span-1">
        <h6 className="footer-title normal-case text-xl text-[#FC8902] opacity-100">
          InnovateTechNetwork
        </h6>
        <p className="text-white opacity-60">
          There are many variations of passages of Lorem Ipsum available, but
          majority have suffered alteration in some form.
        </p>
        <p className="footer-title text-[#FFFFFF] opacity-100">Follow Us</p>
      </nav>
      <nav className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
        <h6 className="footer-title text-[#FFFFFF] opacity-100">
          Useful Links
        </h6>
        <a className="link link-hover text-white opacity-60">Home</a>
        <a className="link link-hover text-white opacity-60">About Us</a>
        <a className="link link-hover text-white opacity-60">Contact Us</a>
        <a className="link link-hover text-white opacity-60">Our Services</a>
        <a className="link link-hover text-white opacity-60">
          Terms and Conditions
        </a>
      </nav>
      <nav className="flex flex-col gap-5 md:col-span-2 lg:col-span-1">
        <h6 className="footer-title text-[#FFFFFF] opacity-100">
          Contact Info
        </h6>
        <a className="link link-hover text-white opacity-60">
          1234, Time Square, New York, United States.
        </a>
        <a className="link link-hover text-white opacity-60">
          ( 123) 456 -7890
        </a>
        <a className="link link-hover text-white opacity-60">
          info@example.com
        </a>
        <a className="link link-hover text-white opacity-60">
          Mon-Fri: 9am to 5pm
        </a>
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
    </footer>
  );
};

export default Footer;
