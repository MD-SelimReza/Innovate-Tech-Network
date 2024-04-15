const Contact = () => {
  return (
    <div className="bg-white px-5 py-24 text-black min-h-[calc(100vh-64px)]">
      <div className="flex gap-10">
        <div className="">
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
          </div>
        </div>
        <div className="bg-[#FC8902] text-white p-6 rounded-lg">
          <div>
            <h1 className="text-3xl mb-5">Visit Us</h1>
            <p className="mb-5">123 Main Street, Cityville, State, ZIP</p>
          </div>
          <div>
            <h1 className="text-3xl mb-5">Call Us</h1>
            <p className="mb-5">+1 (555) 123-4567</p>
          </div>
          <div>
            <h1 className="text-3xl mb-5">Mail Us</h1>
            <p className="mb-5">info@innovate.com</p>
          </div>
        </div>
      </div>
      <button className="btn bg-[#FC8902] text-white border-none mt-5">
        Send Now
      </button>
    </div>
  );
};

export default Contact;
