import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";
import { getRecentRelease } from "../api/api";

// Import Swiper Modules
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
const Carousel = () => {
  SwiperCore.use([Autoplay]);
  const [recentAnime, setrecentAnime] = useState([]);
  useEffect(() => {
    getRecentRelease().then((ress) => {
      setrecentAnime(ress.results);
    });
  }, []);
  return (
    <div className="-z-10">
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {recentAnime.map((ress, i) => {
          // console.log(ress);
          return (
            <SwiperSlide key={i}>
              <div className="swiperImg relative h-[50vh] sm:h-[70vh] md:h-[90vh] bg-no-repeat bg-cover opacity-30 bg-blend-darken bg-center" style={{ backgroundImage: `url('${ress.image}')`, boxShadow: "inset 0 0 5000px #000" }}></div>
              <div className="cardHeader absolute top-[30%] left-9">
                <h1 className="text-white font-public font-normal sm:text-lg md:text-[20px] text-greenlight-500 text-sm" style={{ color: "#CAE962" }}>
                  #{i} Spotlight
                </h1>
                <h1 className="text-white text-2xl font-semibold sm:text-4xl">{ress.title}</h1>
                <p className="w-[90%] sm:w-[50%] text-slate-300 mt-2 md:mt-4 text-[12px] md:text-[15px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloremque nisi totam sapiente perferendis ad at deleniti id veniam provident sunt eos iste atque delectus quia dolor consectetur dicta unde, labore possimus
                  quod natus repellendus rem repellat. Veniam, beatae! Id, ex.
                </p>
                <div className="btnGroup mt-3 md:mt-4 flex gap-4">
                  <a href={`/watch/${ress.episodeId}`}>
                    <button className=" px-3 py-2 sm:mt-5 bg-[#cc2a0e] hover:bg-[#b6260c] flex items-center gap-2 rounded-full text-[14px] text-white">
                      <PlayCircleFilledIcon />
                      <span>Watch Now</span>
                    </button>
                  </a>
                  <a href={`/details/${ress.id}`}>
                    <button className=" px-4 py-2 sm:mt-5 bg-[#83a514] hover:bg-[#617425] flex items-center gap-1 rounded-full text-[14px] text-white">
                      <ArrowForwardIcon sx={{ fontSize: "20px" }} />
                      <span style={{ fontSize: "13px" }}>Detail</span>
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <SwiperSlide key={i}>
              <div className="swiperImg relative h-[50vh] sm:h-[70vh] md:h-[90vh] bg-no-repeat bg-cover opacity-30 bg-blend-darken bg-center" style={{ backgroundImage: `url('${ress.animeImg}')`, boxShadow: "inset 0 0 5000px #000" }}></div>
              <div className="cardHeader absolute top-[30%] left-9">
                <h1 className="text-white font-public font-normal sm:text-lg md:text-[20px] text-greenlight-500 text-sm" style={{ color: "#CAE962" }}>
                  #{i} Spotlight
                </h1>
                <h1 className="text-white text-2xl font-semibold sm:text-4xl">{ress.animeTitle}</h1>
                <p className="w-[90%] sm:w-[50%] text-slate-300 mt-2 md:mt-4 text-[12px] md:text-[15px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi doloremque nisi totam sapiente perferendis ad at deleniti id veniam provident sunt eos iste atque delectus quia dolor consectetur dicta unde, labore possimus
                  quod natus repellendus rem repellat. Veniam, beatae! Id, ex.
                </p>
                <div className="btnGroup mt-3 md:mt-4 flex gap-4">
                  <a href="/watch">
                    <button className=" px-3 py-2 sm:mt-5 bg-[#cc2a0e] hover:bg-[#b6260c] flex items-center gap-2 rounded-full text-[14px] text-white">
                      <PlayCircleFilledIcon />
                      <span>Watch Now</span>
                    </button>
                  </a>
                  <a href="/detail">
                    <button className=" px-4 py-2 sm:mt-5 bg-[#83a514] hover:bg-[#617425] flex items-center gap-1 rounded-full text-[14px] text-white">
                      <ArrowForwardIcon sx={{ fontSize: "20px" }} />
                      <span style={{ fontSize: "13px" }}>Detail</span>
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide> */}
    </div>
  );
};

export default Carousel;
