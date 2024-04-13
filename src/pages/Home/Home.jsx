import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Home = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner2 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
