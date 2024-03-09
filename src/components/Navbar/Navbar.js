import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="flex justify-center items-center flex-col max-w-7xl	w-full mx-auto px-3 pt-4 md:pt-6 pb-3"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      >
      <div className="flex items-center flex-col md:flex-row gap-5">
        <img
          src={Logo}
          alt="Thestrainer"
          loading="lazy"
          className="w-24 sm:w-[110px]"
        />
        <h2 className="text-2xl xs:text-3xl sm:text-[40px] font-extrabold text-black uppercase tracking-[0.09em]">
          THESTRAINER.CO
        </h2>
      </div>
      <p className="text-base sm:text-[29px] font-light mt-4 sm:mt-6 text-center">
        La plataforma
        <span className="text-blue-100"> all-in-one</span> para reclutadores
        basada en
        <span className="text-blue-100 ml-2">
          AI<span className="text-yellow-100">.</span>
        </span>
      </p>
    </div>
  );
};

export default Navbar;
