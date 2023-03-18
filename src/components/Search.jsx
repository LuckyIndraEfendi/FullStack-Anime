import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import axios from "axios";
const Search = () => {
  const [searchAnime, setSearchAnime] = useState("");
  const { name } = useParams();
  useEffect(() => {
    const searchAnimeh = async () => {
      const url = await axios.get(`${process.env.REACT_APP_BASEURL}/anime/gogoanime/${name}?page=1`);
      setSearchAnime(url.data.results);
    };
    searchAnimeh();
  }, []);
  return (
    <div>
      <div className="container w-[95%] px-3 py-2 rounded-md bg-[#222222] mx-auto mt-[20vh]">
        <div className="px-3 py-2">
          <h1 className="text-white text-lg md:text-2xl font-semibold">Result For : Naruto</h1>
        </div>
        <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
          {searchAnime
            ? searchAnime.map((result, i) => (
                <a href={`/details/${result.id}`} className="items" key={i}>
                  <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                    <div
                      className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                      style={{ backgroundImage: `url("${result.image}")` }}
                    >
                      <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                        <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                      </div>
                    </div>
                    <div className="titles px-2 py-3">
                      <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                      <p className="text-white text-[10px] sm:text-[12px] mt-1">{result.releaseDate}</p>
                    </div>
                  </div>
                </a>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Search;
