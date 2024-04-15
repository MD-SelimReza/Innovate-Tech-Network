import banner1 from "../../assets/banner-img1.jpg";

const About = () => {
  return (
    <div>
      <div className="flex gap-10 items-center px-5 bg-white text-black min-h-[calc(100vh-64px)]">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-5" data-aos="fade-right">
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
          <button
            className="btn bg-[#FC8902] text-white border-none mt-5"
            data-aos="zoom-in-up"
          >
            Our Services
          </button>
        </div>
        <div className="w-1/2">
          <img src={banner1} alt="" data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default About;
