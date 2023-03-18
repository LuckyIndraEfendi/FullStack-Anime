import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import RecentRelease from "../../routes/RecentRelease";
import TrendingAnime from "../../routes/TrendingAnime";
import PopularAnime from "../../routes/PopularAnime";
import MovieAnime from "../../routes/MovieAnime";
const Content = () => {
  return (
    <div className="container w-[90%] m-auto">
      <div className="releaseContent mt-5">
        <div className="title flex justify-between">
          <h1 className="text-white   text-[15px] md:text-[23px] md:font-semibold">Recent Release</h1>
          <h1 className="text-white font-public text-[12px] md:text-[15px]">View more</h1>
        </div>
        <div className="cardContent grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 py-2 px-2">
          <RecentRelease />
        </div>
      </div>
      <div className="popularAnime mt-[10vh]">
        <div className="title flex justify-between">
          <h1 className="text-white  text-[15px]  md:text-[25px] md:font-semibold">Popular Anime</h1>
          <h1 className="text-white font-public text-[12px] md:text-[15px]">View more</h1>
        </div>
        <div className="cardContent grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 py-2 px-2">
          <PopularAnime />
        </div>
      </div>
      <div className="trendingAnime mt-[10vh]">
        <div className="title flex justify-between">
          <h1 className="text-white  text-[15px]  md:text-[25px] md:font-semibold">Trending Anime</h1>
          <h1 className="text-white font-public text-[12px] md:text-[15px]">View more</h1>
        </div>
        <div className="cardContent grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 py-2 px-2">
          <TrendingAnime />
        </div>
      </div>
      <div className="movieAnime mt-[10vh]">
        <div className="title flex justify-between">
          <h1 className="text-white  text-[15px]  md:text-[25px] md:font-semibold"> Anime Movie</h1>
          <h1 className="text-white font-public text-[12px] md:text-[15px]">View more</h1>
        </div>
        <div className="cardContent grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-2 py-2 px-2">
          <MovieAnime />
        </div>
      </div>
    </div>
  );
};

// sx={{ position: "absolute", top: "50%", left: "40%" }}
export default Content;
