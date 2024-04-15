import banner2 from "../../assets/banner-img2.jpg";

const Banner2 = () => {
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-70px)]"
        style={{
          backgroundImage: "url(" + banner2 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Hello there
            </h1>
            <p className="mb-5" data-aos="fade-right" data-aos-delay="1000">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div data-aos="fade-right" data-aos-delay="1500">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
