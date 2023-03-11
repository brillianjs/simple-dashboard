import React from "react";

const Preloader = () => {
  return (
    <div className="fixed top-0  left-0 w-full  h-full z-30 opacity-100 bg-white transition-all delay-500 flex justify-center items-center">
      Loading...
    </div>
  );
};

export default Preloader;
