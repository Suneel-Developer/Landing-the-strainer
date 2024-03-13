import React, { useEffect } from "react";
import FrontMarketplace from "../../assets/front-main.png";
import { FaChevronRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Corner from "../../assets/corner.png";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full bg-blue-100 px-3 py-10 md:py-14 relative">
      <div className="w-full max-w-[1600px] mx-auto ">
        <img
          src={Corner}
          alt="corner"
          className="absolute -left-5 top-10 hidden lg:block w-[120px] h-[20%]"
        />
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="px-0 lg:px-24">
          <p
            className="text-[19px] md:text-[42.26px] text-white text-end md:text-center leading-[1.2em] max-w-[1124px] mx-auto w-full"
            data-aos="zoom-in"
          >
            Vive una genuina experiencia de inteligencia artificial con un
            equipo de agentes especializados en reclutamiento
            <span className="text-yellow-100">.</span>
          </p>
          </div>

          <div className="flex justify-center lg:justify-between flex-col gap-5 md:mb-5 lg:flex-row mt-10 md:mt-20">
            <div className="flex-1 justify-center" data-aos="zoom-in">
              <div className="h-auto lg:h-[440px] bg-cover">
                <img
                  src={FrontMarketplace}
                  alt="FrontMarketplace"
                  className="w-full h-full mb-5 lg:mb-0"
                />
              </div>
            </div>

            <div
              className="flex justify-center flex-col w-full lg:w-[40%]"
              data-aos="fade-up"
            >
              <p className="text-[18px] md:text-[26px] lg:text-start leading-[1.460534em] text-white max-w-[480px]">
                Tus asistentes personales, diseñados para ofrecer apoyo en
                tareas, asistencia inmediata y consejo experto, convirtiendo
                cada interacción no solo en una transacción, sino en una
                experiencia informativa y útil.
              </p>
              {/* Btn  */}
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                className="bg-yellow-100 rounded-[100px] flex justify-between items-center gap-2 px-3 md:px-4 md:pl-10 text-white text-lg md:text-[25px] w-full xs:w-[315px] hover:bg-yellow-500 transition duration-500 h-12 md:h-[63px] cursor-pointer mt-10"
              >
                <span>Quiero probarlo</span>
                <div className="w-9 md:w-10 h-9 md:h-10 rounded-full flex justify-center items-center text-center bg-white text-yellow-100">
                  <FaChevronRight className="text-lg md:text-2xl" />
                </div>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
