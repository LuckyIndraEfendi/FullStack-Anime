import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./pages/Footer";
import axios from "axios";
import "./App.css";
const Watch = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState([]);
  const [change, setChange] = useState("");
  const [defaultUrl, setDefaultUrl] = useState("");
  const [eps, setEps] = useState([]);
  useEffect(() => {
    async function episode() {
      try {
        const url = await axios.get(`${process.env.REACT_APP_BASEURL}/anime/gogoanime/servers/${id}`, {
          params: { server: "gogocdn" },
        });
        setWatch(url.data);
        setDefaultUrl(url.data[1].url);
      } catch (err) {
        console.log(err);
      }
    }
    episode();
  }, []);

  const handleChange = (url) => {
    setChange(url);
  };

  return (
    <>
      <div className="">
        <div className="container relative  w-[95%] m-auto">
          <div className="watch  w-full absolute">
            <div className="videoContainer flex flex-col ">
              <div className="embed h-0">
                <h1 className="text-white text-lg font-public font-semibold title md:text-2xl">
                  {id
                    .split("-")
                    .map((word) => {
                      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
                    })
                    .join(" ")}
                </h1>
                <iframe src={`${change ? change : defaultUrl}`} allowFullScreen="yes" frameBorder="0" width="100%" className=" w-full " style={{ height: "calc(76vw/1.63116622)" }}></iframe>

                <div className="downloadVideo flex mt-5">
                  <div className="sub" style={{ background: "#202125" }}>
                    <div className="title">
                      <h1 className="text-sm font-semibold md:text-lg">Pilih Server : </h1>
                    </div>
                    <div className="download">
                      {watch.map((ress, i) => {
                        return (
                          <div className="show cursor-pointer" key={i} onClick={() => handleChange(ress.url)}>
                            {ress.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <div className="sidebar menuList overflow-y-auto mt-3 bg-[#202125] px-2 py-3 rounded-sm">
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    1
                  </a>
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    2
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    3
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    4
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    5
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    6
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    7
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>{" "}
                  <a href="" className="px-4 py-3 text-white rounded-md" style={{ background: "#35373D" }}>
                    8
                  </a>
                </div> */}

                <div className="follow mt-3 bg-slate-500 h-16 mb-5" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/21593.jpg")` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
