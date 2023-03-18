import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import axios from "axios";
const Schedules = () => {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  const { name } = useParams();
  useEffect(() => {
    const mondayAnimeh = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=monday&kids=false&sfw=false`);
      setMonday(url.data.data);
    };
    mondayAnimeh();

    const tuedayAnimeh = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=tuesday&kids=false&sfw=false`);
      setTuesday(url.data.data);
    };
    tuedayAnimeh();

    const wednesdayAnime = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=wednesday&kids=false&sfw=false`);
      setWednesday(url.data.data);
    };
    wednesdayAnime();

    const thursdayAnime = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=thursday&kids=false&sfw=false`);
      setThursday(url.data.data);
    };
    thursdayAnime();

    const fridayAnime = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=friday&kids=false&sfw=false`);
      setFriday(url.data.data);
    };
    fridayAnime();

    const saturdayAnime = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=saturday&kids=false&sfw=false`);
      setSaturday(url.data.data);
    };
    saturdayAnime();

    const sundayAnime = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/schedules?filter=sunday&kids=false&sfw=false`);
      setSunday(url.data.data);
    };
    sundayAnime();
  }, []);
  return (
    <div>
      <div className="container w-[95%] px-3 py-2 rounded-md bg-[#222222] mx-auto mt-[10vh] md:mt-[20vh]">
        <div id="monday" className="">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Monday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {monday
              ? monday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {/* Tuesday */}
        <div id="tuesday" className="mt-5">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Tuesday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {tuesday
              ? tuesday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {/* Wednesday */}
        <div id="wednesday" className="mt-5">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Wednesday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {wednesday
              ? wednesday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {/* Thursday */}

        <div id="thursday" className="mt-5">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Thursday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {thursday
              ? thursday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {/* Friday */}
        <div id="friday" className="mt-5">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Friday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {friday
              ? friday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {/* Saturday */}
        <div id="saturday" className="mt-5">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Saturday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {saturday
              ? saturday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>

        {/* Sunday */}
        <div id="sunday" className="mt-5">
          <div className="px-3 py-2">
            <h1 className="text-white text-lg md:text-2xl font-semibold">Sunday</h1>
          </div>
          <div className="searchContent grid grid-cols-2 md:grid-cols-4 gap-3 px-2 py-1 mt-3">
            {sunday
              ? sunday.map((result, i) => {
                  return (
                    <a href={`/details2/${result.mal_id}`} className="items" key={i}>
                      <div className=" bg-[#3e3f44] rounded-md overflow-hidden hover:cursor-pointer group">
                        <div
                          className="images bg-cover group-hover:bg-[#58595e] bg-center relative group-hover:backdrop-blur-sm group-hover:backdrop-opacity-60 opacity-100 duration-300 group-hover:opacity-70  h-[90px] sm:h-[150px]"
                          style={{ backgroundImage: `url("${result.images.webp.image_url}")` }}
                        >
                          <div className="videoIcons absolute top-[20px] md:top-14 left-[35%] md:left-[36%] opacity-0 group-hover:opacity-100 duration-200">
                            <PlayCircleOutlineIcon sx={{ color: "#fff", fontSize: "55px" }} />
                          </div>
                        </div>
                        <div className="titles px-2 py-3">
                          <h1 className="text-white font-public text-[10px] sm:text-[12px] font-semibold">{result.title.slice(0, 20) + (result.title.length > result.title ? "" : ".....")}</h1>
                          <p className="text-white text-[10px] sm:text-[12px] mt-1">Time : {result.broadcast.time}</p>
                        </div>
                      </div>
                    </a>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
