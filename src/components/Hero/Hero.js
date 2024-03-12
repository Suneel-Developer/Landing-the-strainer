import React, { useEffect, useState, useRef } from "react";
import { FaSortDown } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";

import HeroProfessional from "../../assets/home-web-sin-fondo.jpg";
// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // const [isOpen, setIsOpen] = useState(false);
  // const [isTeleOpen, setTeleIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  // const [selectedTeleOption, setSelectedTeleOption] = useState("");

  // const [isCountryOpen, setIsCountryOpen] = useState("");
  // const [selectedCountryOption, setSelectedCountryOption] = useState("");

  // const dropdownRef = useRef(null);
  // const codeRef = useRef(null);
  // const countryRef = useRef(null);

  // const options = [
  //   "Reclutador independiente",
  //   "Empresa de reclutamiento",
  //   "Reclutador interno de empresa",
  // ];

  // const handleDropdownClick = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionClick = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  // // Coutry Code Dropdown
  // const coutryCode = ["+54", "+56", "+57", "+52", "+51", "+598", "+1", "+43"];

  // const handleCodeDropdownClick = () => {
  //   setTeleIsOpen(!isOpen);
  // };

  // const handleCodeOptionClick = (option) => {
  //   setSelectedTeleOption(option);
  //   setTeleIsOpen(false);
  // };

  // // Coutry Dropdown
  // const coutry = ["+92", "+101", "+463"];

  // const handleCountryDropdownClick = () => {
  //   setIsCountryOpen(!isOpen);
  // };

  // const handleCountryOptionClick = (option) => {
  //   setSelectedCountryOption(option);
  //   setIsCountryOpen(false);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const [selectedCoutryCode, setSelectedCoutryCode] = useState("");
  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const [selectedSoy, setSelectedSoy] = useState("");
  const [isSoyOpen, setIsSoyOpen] = useState(false);

  const countryCodeRef = useRef(null);
  const countryRef = useRef(null);
  const soyRef = useRef(null);


  const closeDropdowns = () => {
    setSelectedCoutryCode(false);
    setIsCountryOpen(false);
    setIsSoyOpen(false);
  };

  // // Coutry Code Dropdown
  const coutryCode = ["+54", "+56", "+57", "+52", "+51", "+598", "+1", "+43"];

  // // Coutry Dropdown
  const coutry = [
    "Argentina",
    "Chile",
    "Colombia",
    "México",
    "Perú",
    "Uruguay",
    "USA",
    "Otro",
  ];

  const options = [
    "Reclutador independiente",
    "Empresa de reclutamiento",
    "Reclutador interno de empresa",
  ];

  const handleDocumentClick = (event) => {
    if (
      countryCodeRef.current &&
      !countryCodeRef.current.contains(event.target) &&
      countryRef.current &&
      !countryRef.current.contains(event.target) &&
      soyRef.current &&
      !soyRef.current.contains(event.target)
    ) {
      closeDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleCountryCodeClick = () => {
    closeDropdowns();
    setSelectedCoutryCode(!selectedCoutryCode);
  };

  const handleCountryClick = () => {
    closeDropdowns();
    setIsCountryOpen(!isCountryOpen);
  };

  const handleSoyClick = () => {
    closeDropdowns();
    setIsSoyOpen(!isSoyOpen);
  };

  const handleCountryCodeItemClick = (item) => {
    setIsCountryCodeOpen(item);
    setSelectedCoutryCode(false);
  };

  const handleCountryItemClick = (item) => {
    setSelectedCountry(item);
    setIsCountryOpen(false);
  };

  const handleSoyItemClick = (item) => {
    setSelectedSoy(item);
    setIsSoyOpen(false);
  };
  return (
    <section className="w-full max-w-7xl px-3 mx-auto py-10 md:py-14" id="hero">
      <div className="flex justify-center items-center lg:items-start lg:justify-between flex-col lg:flex-row gap-10 lg:gap-5">
        <div
          className="w-full sm:w-4/6 lg:w-1/2 flex flex-col gap-10 justify-center items-start"
          data-aos="zoom-in"
        >
          <span className="text-blue-100 leading-[0.98813991em] text-5xl md:text-[79px]">
            Recruitment <br /> made easy
            <span className="text-yellow-100">.</span>
          </span>
          <div className="w-full">
            <img
              src={HeroProfessional}
              alt="Hero Professional"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Form  */}
        <div
          className="w-full sm:w-4/6 lg:w-1/2 bg-[#d9d9d9] rounded-2xl p-3"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <form className="flex flex-col gap-3">
            <p className="text-[14px] md:text-[27px] mb-2 tracking-[-0.02em] leading-[0.97172961em] text-center">
              ¡Déjanos tus datos y nos contactaremos contigo para contarte más
              🤩!
            </p>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="Nombre"
                  className="flex gap-1 text-[15px] md:text-[19px] font-medium"
                >
                  Nombre
                  <p className="text-[#ff3131] font-normal">*</p>
                </label>
                <input
                  type="text"
                  className="bg-white h-[49px] outline-none rounded-2xl py-1 md:py-[6px] px-3 text-base"
                  required
                />
              </div>

              <div className="flex flex-col flex-1">
                <label
                  htmlFor="Apellido"
                  className="flex gap-1 text-[15px] md:text-[19px] font-medium"
                >
                  Apellido
                  <p className="text-[#ff3131] font-normal">*</p>
                </label>
                <input
                  type="text"
                  className="bg-white h-[49px] outline-none rounded-2xl py-1 md:py-[6px] px-3 text-[15px] md:text-base"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="Email"
                className="flex gap-1 text-[15px] md:text-[19px] font-medium"
              >
                Correo Electrónico
                <p className="text-[#ff3131] font-normal">*</p>
              </label>
              <input
                type="email"
                className="bg-white h-[49px] outline-none rounded-2xl py-1 md:py-[6px] px-3 text-[15px] md:text-base"
                required
              />
            </div>

            <div className="flex gap-2 flex-col md:flex-row">
              {/* Télefono  */}
              <div className="flex-1">
                <label
                  htmlFor="Email"
                  className="flex text-[15px] md:text-[19px] font-medium"
                >
                  Télefono
                </label>

                <div
                  className="flex items-center gap-2"
                  style={{ zIndex: "1000" }}
                >
                  <div className="relative w-[35%]" ref={countryCodeRef}>
                    <div
                      className="bg-white h-[49px] rounded-2xl py-1 px-2 text-[15px] md:text-base relative cursor-pointer flex items-center"
                      onClick={handleCountryCodeClick}
                    >
                      <p className="flex-1">{isCountryCodeOpen}</p>
                      <FaSortDown className="absolute top-[10px] right-[6px] sm:right-3 text-xl md:text-2xl" />
                    </div>

                    {selectedCoutryCode && (
                      <ul className="bg-white z-50 rounded-xl p-3 text-[15px] flex flex-col gap-2 absolute top-14 w-full">
                        {coutryCode.map((coutryCode) => (
                          <li
                            key={coutryCode}
                            className="cursor-pointer"
                            onClick={() =>
                              handleCountryCodeItemClick(coutryCode)
                            }
                          >
                            {coutryCode}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <input
                    type="text"
                    className="bg-white h-[49px] outline-none rounded-2xl text-[15px] md:text-base p-3 flex-1"
                  />
                </div>
              </div>

              {/* País  */}
              <div className="flex-1 z-10">
                <label
                  htmlFor="País"
                  className="flex text-[15px] md:text-[19px] font-medium"
                >
                  País
                  <span className="text-[#ff3131] font-normal">*</span>
                </label>
                <div className="relative z-50" ref={countryRef}>
                  <div
                    className="bg-white h-[49px] rounded-2xl py-1 px-3 text-[15px] md:text-base relative cursor-pointer flex items-center"
                    onClick={handleCountryClick}
                  >
                    <p className="flex-1">{selectedCountry}</p>
                    <FaSortDown className="absolute top-[10px] md:top-2 right-5 text-xl md:text-2xl" />
                  </div>
                  {isCountryOpen && (
                    <ul className="bg-white rounded-xl p-3 text-[15px] flex flex-col gap-2 absolute top-14 w-full">
                      {coutry.map((coutry) => (
                        <li
                          key={coutry}
                          className="cursor-pointer"
                          onClick={() => handleCountryItemClick(coutry)}
                        >
                          {coutry}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="Teléfono"
                className="flex gap-1 text-[15px] md:text-[19px] font-medium"
              >
                Soy
                <p className="text-[#ff3131] font-normal">*</p>
              </label>
              <div className="relative" ref={soyRef}>
                <div
                  className="bg-white h-[49px] rounded-2xl py-1 px-3 text-[15px] md:text-base relative cursor-pointer flex items-center"
                  onClick={handleSoyClick}
                >
                  <p className="flex-1">{selectedSoy}</p>
                  <FaSortDown className="absolute top-[10px] md:top-2 right-5 text-xl md:text-2xl" />
                </div>
                {isSoyOpen && (
                  <ul className="bg-white rounded-xl p-3 text-[15px] md:text-lg flex flex-col gap-2 absolute top-14 w-full">
                    {options.map((option) => (
                      <li
                        key={option}
                        className="cursor-pointer"
                        onClick={() => handleSoyItemClick(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button className="bg-yellow-100 font-bold text-lg text-center h-12 tracking-[.2em] mt-3 w-full rounded-xl text-white uppercase">
              Submit
            </button>
          </form>

          <div className="bg-blue-100 rounded-xl text-base md:text-[25px] leading-[1.37085934em] text-center text-white px-10 md:px-20 py-3 md:py-5 mt-5 w-fit lg:w-full mx-auto">
            Conviértete en
            <strong className="text-yellow-100 font-normal">
              Early Partner
            </strong>
            y obtén increíbles beneficios
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-3 border-y border-y-yellow-100 py-5 mt-10">
        <span className="text-[31px] font-extrabold text-blue-100">
          ATS fácil de usar<span className="text-yellow-100">.</span>
        </span>
        <span className="text-[23px] md:text-[31px] font-extrabold text-blue-100">
          Agentes IA especializados<span className="text-yellow-100">.</span>
        </span>
        <span className="text-[23px] md:text-[31px] font-extrabold text-blue-100">
          Oportunidades de negocio<span className="text-yellow-100">.</span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
