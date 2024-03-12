import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Corner from "../../assets/corner.png";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full px-3 py-4 md:py-10 bg-blue-100 relative">
      <img
        src={Corner}
        alt="corner"
        className="absolute left-0 top-12 hidden md:block "
      />
      <div className="w-[60%] mx-auto flex justify-between md:items-center gap-10 md:gap-3">
        <div className="flex justify-center flex-col gap-0" data-aos="zoom-in">
          <h2 className="text-white sm:text-[39px] text-[9px] break-words">
            THESTRAINER.CO
          </h2>
          <span className="text-white text-[8px] sm:text-[37px]">
            Recruitment made easy<span className="text-yellow-100">.</span>
          </span>
        </div>
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          style={{transition: ".5s"}}
          className="bg-white hover:bg-yellow-500 transition hover:text-white text-blue-100 w-[70px] font-bold px-2 sm:w-[190px] mt-[0.4rem] h-4 sm:h-[47px] rounded-[50px] text-[8px] sm:text-[18px] flex justify-center items-center cursor-pointer"
          data-aos="zoom-in"
        >
          <span>Contáctanos</span>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Contact;
