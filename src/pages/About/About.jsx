import { Helmet } from "react-helmet-async";
import banner1 from "../../assets/banner-img1.jpg";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>InnovativeTechNetwork / About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="flex lg:flex-row flex-col-reverse py-20 gap-10 items-center px-5 bg-white text-black min-h-[calc(100vh-64px)]">
        <div className="lg:w-1/2 w-full">
          <h1
            className="text-3xl font-bold mb-5 lg:flex hidden"
            data-aos="fade-right"
          >
            We are InnovativeTechNetwork
          </h1>
          <p className="mb-3" data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            facere quaerat, quisquam quae consequuntur delectus incidunt magnam
            in animi repellendus dolore harum quidem itaque accusamus nisi saepe
            dignissimos nesciunt exercitationem necessitatibus ullam voluptate
            aliquam commodi.
          </p>
          <p className="mb-3" data-aos="fade-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            vitae ratione? Quis est, modi facere rem quia voluptates assumenda
            corrupti.
          </p>
          <div className="text-center">
            <button
              className="py-3 px-8 rounded-md bg-[#FC8902] text-white border-none mt-5"
              data-aos="zoom-in-up"
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <h1
            className="text-3xl text-center font-bold mb-5 lg:hidden"
            data-aos="fade-right"
          >
            We are InnovativeTechNetwork
          </h1>
          <img src={banner1} alt="" className="mx-auto" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default About;
