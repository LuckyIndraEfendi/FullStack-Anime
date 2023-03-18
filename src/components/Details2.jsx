import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./pages/Footer";
import "./App.css";
const Details2 = () => {
  const [details2Anime, setDetails2Anime] = useState();
  const { id } = useParams();
  useEffect(() => {
    const details2 = async () => {
      const url = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      setDetails2Anime(url.data.data);
    };
    details2();
  }, []);

  return (
    <>
      {/* <h1>hello</h1> */}
      <div className=" detailsContainer absolute">
        <div className="relative details">
          <div className="w-[90%] m-auto">
            <div className="contentsDetails ">
              <div className="detailsItem ">
                <div className="firstContent bg-[#222222]">
                  <div className="images bg-no-repeat bg-cover bg-center bg-[#fff] w-full h-[200px] md:h-[250px]" style={{ backgroundImage: `url("${details2Anime ? details2Anime.images.webp.image_url : ""}")` }}></div>
                  <div className="desc w-[95%] m-auto">
                    <div className="mt-[-30px] grid justify-center mb-5 overflow-hidden rounded-md imgTitle">
                      <img src={`${details2Anime ? details2Anime.images.webp.image_url : ""}`} alt="" />
                    </div>
                    <div className="px-4 py-3">
                      <h1 className="text-white text-lg md:text-2xl  font-semibold text-center mt-[-15px] mb-5 md:text-start md:mt-0">{details2Anime ? details2Anime.title : ""}</h1>
                      <div className="flex gap-1 mt-2">
                        <a href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" className="bg-blue-700 px-3 rounded-sm py-1 text-[11px] text-white">
                          FaceBook
                        </a>
                        <a href={`https://twitter.com/share?url=${window.location.href}`} target="_blank" className="bg-blue-500 px-3 rounded-sm py-1 text-[11px] text-white">
                          Twiter
                        </a>
                        <a href={`whatsapp://send?text=${window.location.href}`} target="_blank" data-action="share/whatsapp/share" className="bg-green-600 px-3 rounded-sm py-1 text-[11px] text-white">
                          Whatsapp
                        </a>
                        <a href={`https://pinterest.com/pin/create/button/?url=${details2Anime ? details2Anime.title : ""}${window.location.href}`} className="bg-red-600 px-3 rounded-sm py-1 text-[11px] text-white">
                          Pinterest
                        </a>
                      </div>
                      <div className="synopsis mt-4">
                        <h5 className="text-[15px] text-white font-semibold mb-2">Synopsis {details2Anime ? details2Anime.background : ""}</h5>
                        <p className="text-[11px] md:text-sm text-gray-400">{details2Anime ? details2Anime.background : ""}</p>
                      </div>
                      <div className="tables grid grid-cols-2 mt-3 gap-2">
                        <div className="border-spacing-2">
                          <h1 className="text-white font-semibold text-[11px] md:text-sm">
                            Type : <span className="text-gray-300 font-normal md:text-sm text-[10px] ml-3"> {details2Anime ? details2Anime.type : ""}</span>
                          </h1>
                        </div>
                        <div className="border-spacing-2">
                          <h1 className="text-white font-semibold text-[11px] md:text-sm">
                            Status : <span className="text-gray-300 font-normal md:text-sm text-[11px] ml-3">{details2Anime ? details2Anime.status : ""}</span>
                          </h1>
                        </div>{" "}
                        <div className="border-spacing-2">
                          <h1 className="text-white font-semibold text-[11px] md:text-sm">
                            Total Episode : <span className="text-gray-300 font-normal md:text-sm text-[11px] ml-3">{details2Anime ? details2Anime.episodes : ""} (Eps)</span>
                          </h1>
                        </div>{" "}
                        <div className="border-spacing-2">
                          <h1 className="text-white font-semibold text-[11px] md:text-sm">
                            Release : <span className="text-gray-300 font-normal md:text-sm text-[10px] ml-3">{details2Anime ? details2Anime.aired.string : ""}</span>
                          </h1>
                        </div>{" "}
                        <div className="border-spacing-2">
                          <h1 className="text-white font-semibold text-[11px] md:text-sm">
                            Author :
                            <span className="text-gray-300 font-normal md:text-sm text-[12px] ml-3">
                              <em>Lucky</em>
                            </span>
                          </h1>
                        </div>{" "}
                      </div>
                      <div className="line bg-slate-500 w-full h-[1px] mt-5"></div>
                      <div className="genres">
                        <ul className="list-none m-0 p-0 flex flex-wrap gap-3 mt-5">
                          {details2Anime
                            ? details2Anime.genres.map((ress, i) => (
                                <li className="py-1 px-2 md:px-3 md:text-sm text-[10px] text-[#4d82f3] rounded-[3px] hover:cursor-pointer hover:bg-[#4d82f3] hover:text-white  " style={{ border: "1px solid #4d82f3" }} key={i}>
                                  {ress.name}
                                </li>
                              ))
                            : ""}
                          {/* <li className="py-1 px-2 md:px-3 md:text-sm text-[10px] text-[#4d82f3] rounded-[3px] hover:cursor-pointer hover:bg-[#4d82f3] hover:text-white  " style={{ border: "1px solid #4d82f3" }} key={i}>
                            {ress}
                          </li> */}
                        </ul>
                      </div>
                      <div className="mt-5">
                        <p className="text-[11px] md:text-sm text-gray-400">
                          Streaming{" "}
                          <strong>
                            Anime{" "}
                            {details2Anime
                              ? details2Anime.title
                                  .split("-")
                                  .map((word) => {
                                    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                                  })
                                  .join(" ")
                              : ""}
                          </strong>{" "}
                          Subtitle Indonesia di Lucky Anime. Kamu juga bisa mendownload Anime{" "}
                          {details2Anime
                            ? details2Anime.title
                                .split("-")
                                .map((word) => {
                                  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                                })
                                .join(" ")
                            : ""}{" "}
                          secara gratis, jangan lupa streaming dengan kualitas 720p 480p 360p berdasarkan kecepatan internet kamu untuk menghemat kuota internet,{" "}
                          {details2Anime
                            ? details2Anime.title
                                .split("-")
                                .map((word) => {
                                  return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                                })
                                .join(" ")
                            : ""}{" "}
                          di Lucky Anime juga tersedia dalam bentuk MP4 MKV Hardsub Softsub .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="detailsItem mt-3 md:mt-0 bg-[#222222]">
                <h1>lorem100</h1>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Details2;
