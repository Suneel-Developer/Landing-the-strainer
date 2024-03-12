import React, { useEffect } from "react";
import FrontMarketplace from "../../assets/front-mktplace-lleno.png";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Marketplace = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto px-3 py-4 md:py-14">
      <p className="text-xl md:text-[39px] text-center leading-[1.2em]" data-aos="zoom-in">
        Accede a nuestro
        <span className="text-blue-100"> marketplace integrado</span> y
        aprovecha al máximo a tus candidatos
        <span className="text-yellow-100">.</span>
      </p>

      <div className="flex justify-center lg:justify-between flex-col lg:flex-row mt-14">
        <div className="flex justify-center items-center lg:w-[40%]" data-aos="fade-right">
          <p className="text-sm md:text-2xl text-end leading-[1.460534em]">
            Optimiza tu estrategia de reclutamiento y maximiza el potencial de
            cada candidato. Descubre oportunidades de negocio y potencia tu
            selección de talentos, elevando tu negocio a nuevos horizontes.
          </p>
        </div>

        <div className="flex-1 relative justify-center lg:px-16" data-aos="zoom-in">
          <div className="w-5/6 mx-auto lg:w-full h-full bg-cover">
            <img
              src={FrontMarketplace}
              alt="FrontMarketplace"
              className="w-full h-full mt-5 lg:mt-0"
            />

            <div className="w-20 md:w-40 h-2 md:h-[14px] hidden lg:block absolute top-0 left-18 bottom-0 my-auto">
              <svg
                id="XhSsc6j0ApUtsuxb"
                viewBox="0 0 178.0124179713805 16.000000000000057"
                preserveAspectRatio="none"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  overflow: "visible",
                  opacity: "1.0",
                  minHeight: "1px",
                  stroke: "#5271ff",
                  fill: "#5271ff",
                }}
              >
                <g id="YTob4XudFEG04PHt">
                  <path
                    d="M163.01241797,8 L2,8"
                    style={{
                      fill: "None",
                      strokeWidth: "4px",
                      strokeLinecap: "butt",
                    }}
                  ></path>
                  <path
                    id="L2BfKaBAjp7ijW5Q"
                    d="M176.01241797,8 C176.01241797,4.6862915 173.32612647,2 170.01241797,2 C166.69870947,2 164.01241797,4.6862915 164.01241797,8 C164.01241797,11.3137085 166.69870947,14 170.01241797,14 C173.32612647,14 176.01241797,11.3137085 176.01241797,8"
                    style={{
                      strokeLinejoin: "round",
                      strokeLinecap: "round",
                      strokeWidth: "4px",
                      fill: "none",
                    }}
                  ></path>
                  <path
                    id="RBxOaZFbUQiX6604"
                    d="M10,14 L2,8 L10,2"
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
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
