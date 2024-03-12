import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Corner from "../../assets/corner.png"

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full px-3 py-4 md:py-10 bg-blue-100 relative">
      <img src={Corner} alt="corner" className="absolute left-16 top-14 hidden md:block" />
      <div className="w-full max-w-5xl mx-auto flex justify-between md:items-center gap-10 md:gap-3">
        <div
          className="flex justify-center flex-col gap-0"
          data-aos="fade-right"
        >
          <h2 className="text-white sm:text-[39px] text-[9px] break-words">
            THESTRAINER.CO
          </h2>
          <span className="text-white text-[8px] sm:text-[37px]">
            Recruitment made easy.
          </span>
        </div>
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          className="bg-white text-blue-100 w-[70px] sm:w-[190px] h-4 sm:h-[47px] rounded-[50px] text-[8px] sm:text-[18px] flex justify-center items-center cursor-pointer"
          data-aos="fade-left"
        >
          Contáctanos
        </ScrollLink>
      </div>
    </section>
  );
};

export default Contact;
