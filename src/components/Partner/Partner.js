import React, { useEffect } from "react";
import benifit1 from "../../assets/benefits1.webp";
import benifit2 from "../../assets/benefits2.webp";
import benifit3 from "../../assets/benefits3.webp";
import benifit4 from "../../assets/benefits4.webp";
import { FaChevronRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";


// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Partner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto px-3 py-20 md:my-10">
      <div className="flex gap-14 justify-center lg:gap-40 flex-col lg:flex-row">
        <div
          className="text-[46px] md:text-[60px] flex-1 lg:max-w-[310px] text-center leading-[1.2em] px-5"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          Conviértete en <span className="text-blue-100">Early Partner</span> y
          obtén increíbles beneficios
          <span className="text-yellow-100">.</span>
        </div>

        <div
          className="flex flex-col gap-7 md:gap-10"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <div className="flex items-center gap-4 md:gap-14 flex-col sm:flex-row">
            <div className="w-[90px] md:w-[103px] h-16 flex justify-center">
              <img
                src={benifit1}
                alt="3D Design Review Interface"
                loading="lazy"
              />
            </div>
            <p className="flex-1 text-[22px] md:text-[24px] leading-[1.3815535em] w-full max-w-[415px]">
              Co creación y diseño de características a tu medida
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-14 flex-col sm:flex-row">
            <div className="w-[90px] md:w-[103px] h-16 flex justify-center">
              <img
                src={benifit2}
                alt="Global Business Deal"
                loading="lazy"
                className="w-[73px]"
              />
            </div>
            <p className="flex-1 text-[22px] md:text-[24px] leading-[1.3815535em] w-full max-w-[415px]">
              Beta testing gratuito y precio preferente para siempre
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-14 flex-col sm:flex-row">
            <div className="w-[90px] md:w-[103px] h-[75px] flex justify-center">
              <img
                src={benifit3}
                alt="Sales Growth 3D Render"
                loading="lazy"
                className="w-[76px]"
              />
            </div>
            <p className="flex-1 text-[22px] md:text-[24px] leading-[1.3815535em] w-full max-w-[415px]">
              Acceso preferente a las mejores oportunidades de nuestro
              marketplace
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-14 flex-col sm:flex-row">
            <div className="w-[90px] md:w-[103px] h-[82px] flex justify-center">
              <img
                src={benifit4}
                className="w-[58px]"
                alt="3D Male Character Confusion about Work"
                loading="lazy"
              />
            </div>
            <p className="flex-1 text-[22px] md:text-[24px] leading-[1.3815535em] w-full max-w-[415px]">
              Soporte premium directo y personalizado
            </p>
          </div>
        </div>
      </div>

      {/* Btn  */}
      <ScrollLink
        to="hero"
        spy={true}
        smooth={true}
        duration={500}
        data-aos="fade-up"
        style={{transition: ".5s"}}
        className="bg-blue-100 hover:bg-blue-700 transition duration-1000 rounded-[100px] flex justify-between items-center gap-2 px-3 md:px-4 pl-7 md:pl-12 text-white text-[24px] md:text-[33px] md:w-auto w-full md:max-w-[422px] h-[60px] md:h-20 cursor-pointer mx-auto mt-10 md:mt-20"
      >
        Quiero ser partner
        <div className="w-9 md:w-12 h-9 md:h-12 rounded-full flex justify-center items-center text-center bg-yellow-100 text-blue-100">
          <FaChevronRight className="text-lg md:text-2xl" />
        </div>
      </ScrollLink>
    </div>
  );
};

export default Partner;
