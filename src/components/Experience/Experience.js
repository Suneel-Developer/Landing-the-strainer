import React, { useEffect } from "react";
import FrontMarketplace from "../../assets/front-main.png";
import { FaChevronRight } from "react-icons/fa";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full bg-blue-100 px-3 py-14 md:my-10">
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-[20.52px] md:text-[42.26px] text-white text-end md:text-center leading-[1.2em]" data-aos="zoom-in">
          Vive una genuina experiencia de inteligencia artificial con un equipo
          de agentes especializados en reclutamiento
          <span className="text-yellow-100">.</span>
        </p>

        <div className="flex justify-center lg:justify-between flex-col lg:flex-row mt-14">
          <div className="flex-1 relative justify-center lg:px-16" data-aos="zoom-in">
            <div className="w-5/6 mx-auto lg:w-full h-full bg-cover">
              <img
                src={FrontMarketplace}
                alt="FrontMarketplace"
                className="w-full h-full mb-10 lg:mb-0"
              />
            </div>
            <div className="w-[105px] h-[13px] absolute top-24 hidden lg:block lg:right-[85px]">
              <svg
                id="KENx0yueIJnFLivt"
                viewBox="0 0 123.3457513047141 16.0"
                preserveAspectRatio="none"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                  opacity: "1.0",
                  minHeight: "1px",
                  stroke: "#f4cd59",
                  fill: "#f4cd59",
                }}
              >
                <g id="tw8DxwfuGwYEw6Dn">
                  <path
                    d="M15,8 L121.3457513,8"
                    style={{
                      fill: "None",
                      strokeWidth: "4px",
                      strokeLinecap: "butt",
                    }}
                  ></path>
                  <path
                    id="ia1nxI04juoQdjeX"
                    d="M2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8"
                    style={{
                      strokeLinejoin: "round",
                      strokeLinecap: "round",
                      strokeWidth: "4px",
                      fill: "none",
                    }}
                  ></path>
                  <path
                    id="YsQy1KMsNerjefwP"
                    d="M113.3457513,2 L121.3457513,8 L113.3457513,14"
                    style={{
                      strokeLinejoin: "round",
                      strokeLinecap: "round",
                      strokeWidth: "4px",
                      fill: "none",
                    }}
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <div className="flex justify-center flex-col lg:w-[40%]" data-aos="fade-up">
            <p className="text-[23px] md:text-2xl lg:text-start leading-[1.460534em] text-white">
              Tus asistentes personales, diseñados para ofrecer apoyo en tareas,
              asistencia inmediata y consejo experto, convirtiendo cada
              interacción no solo en una transacción, sino en una experiencia
              informativa y útil.
            </p>
            {/* Btn  */}
            <div className="bg-yellow-100 rounded-[100px] flex justify-between items-center gap-2 px-3 md:px-4 md:pl-10 text-white text-lg md:text-[24px] w-[299px] h-12 md:h-[60px] cursor-pointer mt-10">
              <span>Quiero probarlo</span>
              <div className="w-9 md:w-10 h-9 md:h-10 rounded-full flex justify-center items-center text-center bg-white text-yellow-100">
                <FaChevronRight className="text-lg md:text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
