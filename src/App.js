import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Watch, Details, Search, Schedules, Details2 } from "./components";
import Navbar from "./components/pages/Navbar";
import Error from "./Error/Error";
import Footer from "./components/pages/Footer";
function App(props) {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch/:id" element={<Watch />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/details2/:id" element={<Details2 />}></Route>
          <Route path="/search/:name" element={<Search />}></Route>
          <Route path="/schedules" element={<Schedules />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
