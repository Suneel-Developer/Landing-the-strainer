import React, { useEffect } from "react";
import Logo from "../../assets/blue-logo.png";
import { Link as ScrollLink } from "react-scroll";


// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full px-3 py-5 bg-blue-100">
      <div className="w-full max-w-6xl mx-auto flex justify-between flex-col md:flex-row items-center gap-6 md:gap-3">
        <div
          className="flex justify-center items-center flex-col md:flex-row gap-6"
          data-aos="fade-right"
        >
          <img src={Logo} alt="thestrainer" />
          <p className="text-white text-lg sm:text-[32.8px] text-center">
            Únete a nuestra red de partners
          </p>
        </div>
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-white text-blue-100 cursor-pointer w-40 sm:w-[190px] h-10 sm:h-[47px] rounded-[50px] text-lg sm:text-[21px flex justify-center items-center"
          data-aos="fade-left"
        >
          Suscribete
        </ScrollLink>
      </div>
    </section>
  );
};

export default Subscribe;
