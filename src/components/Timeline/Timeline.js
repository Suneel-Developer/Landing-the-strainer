import React, {useEffect} from "react";
import TimeLineImg from "../../assets/timline.png";
import CandidateManagement from "../../assets/candidate-management.png";
import SmartCvFilter from "../../assets/smart-cv-filter.png";
import IntegratedBilling from "../../assets/integrated-billing.png";
import Whatshap from "../../assets/whatshap.png";
import StatisticAnalysisReport from "../../assets/statistic-analysis-report.svg";
import { FaChevronRight } from "react-icons/fa";

// AOS Animation
import Aos from "aos";
import "aos/dist/aos.css";




const Timeline = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="text-center w-full max-w-6xl mx-auto px-3 py-5 md:py-10 ">
      <div className="text-xl md:text-[34px] leading-[1em] mb-14" data-aos="zoom-in">
        Lleva tu <span className="text-blue-100">reclutamiento</span> a otro
        nivel con el poder de la{" "}
        <span className="text-blue-100">inteligencia artificial</span>
        <span className="text-yellow-100">.</span>
      </div>

      <div data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <img
              src={CandidateManagement}
              alt="Candidate Management"
              className="w-fit h-14 md:h-20"
              loading="lazy"
            />
            <span className="text-blue-100 text-base md:text-lg font-bold tracking-[-0.02em]">
              Gestión de Candidatos
            </span>
            <p className="text-sm md:text-base leading-[1.09614963em] tracking-[-0.02em]">
              Guarda tus candidatos solo subiendo el CV y gestiona tu base de
              datos con nuestro asistente de IA
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-3">
            <img
              src={SmartCvFilter}
              alt="Smart Cv Filter"
              className="w-fit h-14 md:h-20"
              loading="lazy"
            />
            <span className="text-blue-100 text-base md:text-lg font-bold tracking-[-0.02em]">
              Filtro de CVs inteligente
            </span>
            <p className="text-sm md:text-base leading-[1.09614963em] tracking-[-0.02em]">
              Descarta automáticamente los candidatos que no califican y genera
              un ranking de los mejores
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 md:gap-3">
            <img
              src={IntegratedBilling}
              alt="Integrated Billing"
              className="w-fit h-14 md:h-20"
              loading="lazy"
            />
            <span className="text-blue-100 text-base md:text-lg font-bold tracking-[-0.02em]">
              Facturación integrada
            </span>
            <p className="text-sm md:text-base leading-[1.09614963em] tracking-[-0.02em]">
              Factura tus procesos y gestiona tu cobranza directamente desde
              nuestra plataforma
            </p>
          </div>
        </div>

        <img
          src={TimeLineImg}
          alt="nlgfds"
          loading="lazy"
          className="w-full my-8 md:my-5"
        />
        <div className="w-full md:w-[780px] mx-auto justify-between ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-items-center">
            <div className="flex flex-col items-center gap-3">
              <img
                src={Whatshap}
                alt="Statistic Analysis Report"
                className="w-fit h-14 md:h-20"
                loading="lazy"
              />
              <span className="text-blue-100 text-base md:text-lg font-bold tracking-[-0.02em]">
                Comunicación automatizada
              </span>
              <p className="text-sm md:text-base leading-[1.09614963em] tracking-[-0.02em] w-full max-w-[250px]">
                Contacta a tus candidatos y clientes automáticamente por correo
                y Whatsapp
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src={StatisticAnalysisReport}
                alt="Statistic Analysis Report"
                className="w-fit h-14 md:h-20"
                loading="lazy"
              />
              <span className="text-blue-100 text-base md:text-lg font-bold tracking-[-0.02em]">
                Reportes
              </span>
              <p className="text-sm md:text-base leading-[1.09614963em] tracking-[-0.02em] w-full max-w-[250px]">
                Genera informes de tus candidatos y procesos para compartirlos
                fácilmente con tus clientes
              </p>
            </div>
          </div>
        </div>
      </div>

       {/* Btn  */}
       <div data-aos="fade-up" className="bg-blue-100 rounded-[100px] flex justify-between items-center gap-2 px-3 md:px-4 md:pl-6 text-white text-lg md:text-2xl md:w-auto w-[230px] md:max-w-[330px] h-12 md:h-16 cursor-pointer mx-auto mt-10 md:mt-20">
       Quiero saber más
        <div className="w-9 md:w-12 h-9 md:h-12 rounded-full flex justify-center items-center text-center bg-yellow-100 text-blue-100">
          <FaChevronRight className="text-lg md:text-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
