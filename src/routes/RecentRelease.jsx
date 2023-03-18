import React from "react";
import { useState, useEffect } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { getRecentReleaseContent } from "../api/api";
const RecentRelease = () => {
  const [recentRelease, setRecentRelease] = useState([]);
  useEffect(() => {
    getRecentReleaseContent().then((ress, i) => {
      setRecentRelease(ress.data.results);
    });
  }, []);
  return (
    <>
      {/* {console.log(recentRelease)} */}
      {recentRelease.map((ress, i) => (
        <a href={`/watch/${ress.episodeId}`} className="items" key={i}>
          <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
            <div
              className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
              style={{ backgroundImage: `url("${ress.image}")` }}
            >
              <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
              </div>
            </div>
            <div className="titles px-2 py-3">
              <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{ress.title.slice(0, 20) + (ress.title.length > ress.title ? "" : ".....")}</h1>
              <p className="text-white text-[12px] sm:text-[12px] mt-1">Episode : {ress.episodeNumber}</p>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default RecentRelease;
