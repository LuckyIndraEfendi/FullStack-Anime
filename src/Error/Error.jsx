import React from "react";

const Error = () => {
  return (
    <div className="grid items-center justify-center h-screen">
      <div className="">
        <h1 className="text-white text-[20px] font-public">Page Not Found </h1>
        <p className="text-center text-white mt-1">
          <em>Status 404 </em>{" "}
        </p>
        <a href="/" className="flex justify-center mt-3">
          <button className="text-white bg-red-500 px-3 py-2 text-sm rounded-md">Back to Home</button>
        </a>{" "}
      </div>
    </div>
  );
};

export default Error;
