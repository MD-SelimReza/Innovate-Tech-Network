import banner1 from "../../assets/banner-img1.jpg";

const Banner1 = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-90px)]"
        style={{
          backgroundImage: "url(" + banner1 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Hello there
            </h1>
            <p className="mb-5" data-aos="fade-left" data-aos-delay="1000">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div data-aos="fade-left" data-aos-delay="1500">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
