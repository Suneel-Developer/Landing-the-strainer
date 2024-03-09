import React, { useEffect } from "react";

import HeroProfessional from "../../assets/home-web-sin fondo.png";
// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="w-full max-w-7xl px-3 mx-auto py-10 md:py-14">
      <div className="flex justify-center items-center lg:items-start lg:justify-between flex-col lg:flex-row gap-10 lg:gap-5">
        <div
          className="w-full sm:w-4/6 lg:w-5/12 flex flex-col gap-10 justify-center items-start"
          
          data-aos="zoom-in"
        >
          <span className="text-blue-100 leading-[0.98813991em] text-5xl md:text-[73px]">
            Recruitment <br /> made easy
            <span className="text-yellow-100">.</span>
          </span>
          <div className="w-full md:w-[500px]">
            <img
              src={HeroProfessional}
              alt="Hero Professional"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full sm:w-4/6 lg:w-5/12" data-aos="fade-up" data-aos-duration="300">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="Nombre"
                className="flex gap-2 text-base md:text-lg font-semibold"
              >
                Nombre
                <p className="text-blue-100 font-light text-sm">required*</p>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="border border-gray-500 outline-none rounded-lg py-1 md:py-[6px] px-3 text-base"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="Apellido"
                className="flex gap-2 text-base md:text-lg font-semibold"
              >
                Apellido
                <p className="text-blue-100 font-light text-sm">required*</p>
              </label>
              <input
                type="text"
                placeholder="Apellido"
                className="border border-gray-500 outline-none rounded-lg py-1 md:py-[6px] px-3 text-base"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="Email"
                className="flex gap-2 text-base md:text-lg font-semibold"
              >
                Email
                <p className="text-blue-100 font-light text-sm">required*</p>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-500 outline-none rounded-lg py-1 md:py-[6px] px-3 text-base"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="Teléfono"
                className="flex gap-2 text-base md:text-lg font-semibold"
              >
                Teléfono
                <p className="text-blue-100 font-light text-sm">optional*</p>
              </label>
              <input
                type="text"
                placeholder="Teléfono"
                className="border border-gray-500 outline-none rounded-lg py-1 md:py-[6px] px-3 text-base"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="Soy"
                className="flex gap-5 text-base md:text-lg font-semibold"
              >
                Soy
              </label>

              <select className="border border-gray-500 outline-none rounded-lg py-[6px] px-3 text-base">
                <option>Reclutador independiente</option>
                <option>Empresa de reclutamiento</option>
                <option>Reclutador interno de empresa</option>
              </select>
            </div>
          </form>

          <div className="bg-blue-100 rounded-[100px] text-base md:text-xl text-center text-white px-10 md:px-20 py-3 md:py-5 mt-5 w-fit lg:w-full mx-auto">
            Conviértete en{" "}
            <strong className="text-yellow-100 font-normal">
              Early Partner
            </strong>{" "}
            y obtén increíbles beneficios
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-3 border-y border-y-yellow-100 py-7 mt-10">
        <span className="text-[23px] sm:text-4xl font-extrabold text-blue-100">
          ATS fácil de usar<span className="text-yellow-100">.</span>
        </span>
        <span className="text-[23px] sm:text-4xl font-extrabold text-blue-100">
          Agentes IA especializados<span className="text-yellow-100">.</span>
        </span>
        <span className="text-[23px] sm:text-4xl font-extrabold text-blue-100">
          Oportunidades de negocio<span className="text-yellow-100">.</span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
