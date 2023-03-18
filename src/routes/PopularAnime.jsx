import React, { useEffect, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { PopularAnimeh } from "../api/api";
const PopularAnime = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  useEffect(() => {
    PopularAnimeh().then((ress) => {
      setPopularAnime(ress);
    });
  }, []);
  return (
    <>
      {popularAnime.map((ress, i) => {
        return (
          <a href={`/details/${ress.animeId}`} className="items" key={i}>
            <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
              <div
                className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                style={{ backgroundImage: `url("${ress.animeImg}")` }}
              >
                <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                  <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                </div>
              </div>
              <div className="titles px-2 py-3">
                <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{ress.animeTitle.slice(0, 20) + (ress.animeTitle.length > ress.title ? "" : ".....")}</h1>
                <p className="text-white text-[10px] sm:text-[12px] mt-1">Release : {ress.releasedDate}</p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default PopularAnime;
