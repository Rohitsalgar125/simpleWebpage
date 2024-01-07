import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const index = () => {
  const albums = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "thirteen",
    "fourteen",
    "fifteen",
  ];
  return (
    <div style={{ margin: "30px auto" }}>
      <div>
        <p className="text-center fw-bold">Oppening Ceremony</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        // spaceBetween={1}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {albums &&
          albums.map((path, index) => {
            return (
              <SwiperSlide>
                <img
                  src={`../../../public/assets/images/${path}.jpg`}
                  alt={path}
                  width={"80%"}
                  height={"80%"}
                  key={index}
                ></img>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default index;
