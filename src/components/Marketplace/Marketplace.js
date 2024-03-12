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
    <section className="w-full mx-auto max-w-[1600px] px-3 py-4 md:py-14">
      <p className="text-[18px] md:text-[44px] text-center leading-[1.2em] max-w-[1220px] mx-auto" data-aos="zoom-in">
        Accede a nuestro
        <span className="text-blue-100"> marketplace integrado</span> y
        aprovecha al máximo a tus candidatos
        <span className="text-yellow-100">.</span>
      </p>

      <div className="flex justify-center lg:justify-between flex-col gap-5 md:gap-10 lg:flex-row mt-14 max-w-[1400px] mx-auto w-full">
        <div className="flex justify-center items-center " data-aos="fade-right">
          <p className="text-[15.2px] md:text-[27px] text-end leading-[1.460534em] max-w-[580px]">
            Optimiza tu estrategia de reclutamiento y maximiza el potencial de
            cada candidato. Descubre oportunidades de negocio y potencia tu
            selección de talentos, elevando tu negocio a nuevos horizontes.
          </p>
        </div>

        <div className="flex-1" data-aos="zoom-in">
          <div className="h-auto lg:h-[400px] bg-cover w-full">
            <img
              src={FrontMarketplace}
              alt="FrontMarketplace"
              className="w-full h-full mt-5 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
