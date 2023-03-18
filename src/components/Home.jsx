import React from "react";
import { useState, useEffect } from "react";
import { getRecentRelease } from "../api/api";
import Navbar from "./pages/Navbar";
import Carousel from "../lib/Carousel";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
const Home = () => {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    getRecentRelease().then((ress) => {
      setTopAnime(ress);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
