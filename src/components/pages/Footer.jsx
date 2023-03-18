import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#222222] md:mt-[10vh] mt-[5vh] w-full px-3 py-5 ">
        <div className="flex  gap-2 justify-evenly md:hidden">
          <a href="/">
            <button className="text-white bg-blue-500 px-2 text-[10px] py-2 rounded-sm ">Home</button>
          </a>{" "}
          <a href="/schedules">
            <button className="text-white bg-blue-500 px-2 text-[10px] py-2 rounded-sm ">Jadwal Rilis</button>
          </a>{" "}
          <a href="teer.id/lucky-indra-efendi-lpwhg">
            <button className="text-white bg-red-600 px-2 text-[10px] py-2 rounded-sm ">Follow Me</button>
          </a>{" "}
          <a href="https://trakteer.id/lucky-indra-efendi-lpwhg" target="_blank">
            <img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png" height="40" style={{ border: "0px", height: "30px" }} alt="Trakteer Saya" />
          </a>{" "}
        </div>
        <div className="title flex flex-col items-center mt-5">
          <h1 className="text-[#839792] hover:text-[#dbd9d9] md:text-[11px] font-public text-[9px] mb-1">Copyright © 2022 Lucky Anime. All Rights Reserved</h1>
          <p className="text-[#7D9E96] hover:text-[#a7a3a3] text-[8px] md:text-[11px] text-center">Disclaimer: This site Lucky Anime does not store any files on its server. All contents are provided by non-affiliated third parties</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
