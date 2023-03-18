import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
function Navbar(props) {
  const [colorChange, setColorchange] = useState(false);
  const [getSearch, setSearchAnime] = useState("");
  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleChange = (e) => {
    setSearchAnime(e.target.value);
  };
  return (
    <nav
      className={
        colorChange
          ? "flex z-30 justify-around items-center backdrop-blur-sm px-3 py-3  bg-[#202125] fixed w-full md:opacity-100 md:duration-500 top-0"
          : "bg-[transparent]  md:duration-500 flex justify-around items-center backdrop-blur-sm px-3 py-3  bg-[#202125] fixed w-full z-30 top-0"
      }
    >
      <div className="logo ">
        <a href="/">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiLVlKVr7czClFkVCb91yEpLFvQnVsEHmd09dJrGmI2wqAMkmEPLnwkWtwl4bGcrs-mXYafYCW592vLFkfgyHhHx89dACtHgntIWTgN3o4qrHefQ3ho_J-q6MIOKU4U7m_AeKIwHgQv76n9BK_777a4sO52wo3Lmd7sKp4zNWzRRBk4S4yg9uvpzMUCOw=w800"
            alt=""
            className="w-[130px] md:w-[200px] "
          />
        </a>{" "}
        {/* <h1 className="font-public">Navbar</h1> */}
      </div>
      <div className="social sm:gap-4 hidden lg:flex">
        <a href="">
          <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png" alt="" width="30px" />
        </a>
        <a href="">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="" width="30px" />
        </a>{" "}
        <a href="">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="" width="30px" />
        </a>{" "}
        <a href="">
          <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="" width="30px" />
        </a>
      </div>
      <ul className="menu list-none justify-around w-2/6 hidden sm:flex items-center">
        <li>
          <a href="/" className="text-white  text-sm font-public">
            Home
          </a>
        </li>
        <li>
          <a href="/schedules" className="text-white text-sm font-public">
            Schedules
          </a>
        </li>{" "}
        <li>
          <a href="https://trakteer.id/lucky-indra-efendi-lpwhg/tip" target="_blank" className="text-white font-public text-sm">
            <img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-6.png" height="40" style={{ border: "0px", height: "40px" }} alt="Trakteer Saya" />
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-sm font-public">
            Contact Me
          </a>
        </li>
      </ul>
      <div className="search flex items-center gap-2 justify-center">
        <input type="text" className="px-3 py-[6px] bg-white rounded-sm focus:outline-1 focus:outline-dashed text-sm font-public w-[150px] sm:w-full" placeholder="Search for..." onChange={(e) => handleChange(e)} />

        <a href={`/search/${getSearch}`}>
          <div className="bg-white py-[3.5px] text-slate-800 px-[9px] rounded-sm flex justify-center">
            <SearchIcon />
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
